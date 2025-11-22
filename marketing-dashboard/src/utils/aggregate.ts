// src/utils/aggregate.ts

import type { MarketingRow, AnalyticsRow, TableRowData } from "../types";

// Safe numeric sum
function safeSum(values: (number | undefined | null)[]): number {
  return values.reduce<number>((sum, value) => sum + (value ?? 0), 0);
}


// Detect baseline category from analytics
function detectBaselineCategory(campaign: string = ""): string {
  const c = campaign.toLowerCase();

  if (c.includes("season") || c.includes("summer") || c.includes("school"))
    return "Seasonality";

  if (c.includes("holiday") || c.includes("christ") || c.includes("newyear"))
    return "Holidays";

  if (c.includes("direct") || c.includes("organic") || c.includes("baseline"))
    return "Direct";

  return "Trends";
}

export function buildTableTree(
  marketing: MarketingRow[],
  analytics: AnalyticsRow[]
): TableRowData[] {
  // -------------------------------
  // 1. PAID GROUP (from marketing)
  // -------------------------------
  const paidByChannel = new Map<
    string,
    { spend: number; impressions: number; conversions: number; clicks: number; revenue: number }
  >();

  for (const row of marketing) {
    const channel = row.channel ?? "Unknown";

    if (!paidByChannel.has(channel)) {
      paidByChannel.set(channel, {
        spend: 0,
        impressions: 0,
        conversions: 0,
        clicks: 0,
        revenue: 0
      });
    }

    const current = paidByChannel.get(channel)!;

    current.spend += row.spend ?? 0;
    current.impressions += row.impressions ?? 0;
    current.conversions += row.conversions ?? 0;
    current.clicks += row.clicks ?? 0;
  }

  const paidChildren: TableRowData[] = Array.from(paidByChannel.entries()).map(
    ([channel, m], idx) => {
      const pROAS = m.spend ? m.revenue / m.spend : null;
      const iROAS = m.impressions ? m.conversions / m.impressions : null;

      return {
        id: `paid-child-${idx}`,
        category: channel,
        spend: m.spend ?? 0,
        pRevenue: m.revenue ?? 0,
        iRevenue: m.revenue ?? 0,
        pROAS: pROAS,
        iROAS: iROAS,
        contribution: null,
        children: [],
        isTotal: false // <-- added
      };
    }
  );

  const paidAggregate: TableRowData = {
    id: "paid-aggregate",
    category: "Paid",
    spend: safeSum(Array.from(paidByChannel.values()).map((v) => v.spend ?? 0)),
    pRevenue: safeSum(Array.from(paidByChannel.values()).map((v) => v.revenue ?? 0)),
    iRevenue: null,
    children: paidChildren,
    isTotal: false // <-- added
  };

  // -------------------------------
  // 2. BASELINE GROUP (analytics)
  // -------------------------------
  const baselineGroups: Record<
    string,
    { spend: number; revenue: number; impressions: number; conversions: number }
  > = {
    Direct: { spend: 0, revenue: 0, impressions: 0, conversions: 0 },
    Seasonality: { spend: 0, revenue: 0, impressions: 0, conversions: 0 },
    Holidays: { spend: 0, revenue: 0, impressions: 0, conversions: 0 },
    Trends: { spend: 0, revenue: 0, impressions: 0, conversions: 0 }
  };

  for (const row of analytics) {
    const category = detectBaselineCategory(row.campaign);

    baselineGroups[category].spend += row.spend ?? 0;
    baselineGroups[category].revenue += row.revenue ?? 0;
    baselineGroups[category].impressions += row.impressions ?? 0;
    baselineGroups[category].conversions += row.conversions ?? 0;
  }

  const baselineChildren: TableRowData[] = Object.entries(baselineGroups).map(
    ([category, vals], idx) => {
      const pROAS = vals.spend ? vals.revenue / vals.spend : null;
      const iROAS = vals.impressions ? vals.conversions / vals.impressions : null;

      return {
        id: `baseline-child-${idx}`,
        category,
        spend: vals.spend ?? 0,
        pRevenue: vals.revenue ?? 0,
        iRevenue: vals.revenue ?? 0,
        pROAS,
        iROAS,
        contribution: null,
        children: [],
        isTotal: false // <-- added
      };
    }
  );

  const baselineAggregate: TableRowData = {
    id: "baseline-aggregate",
    category: "Baseline",
    spend: safeSum(Object.values(baselineGroups).map((v) => v.spend ?? 0)),
    pRevenue: safeSum(Object.values(baselineGroups).map((v) => v.revenue ?? 0)),
    iRevenue: null,
    children: baselineChildren,
    isTotal: false // <-- added
  };

  // -------------------------------
  // 3. TOTAL ROW
  // -------------------------------
  const totalSpend =
    (baselineAggregate.spend ?? 0) + (paidAggregate.spend ?? 0);
  const totalRevenue =
    (baselineAggregate.pRevenue ?? 0) + (paidAggregate.pRevenue ?? 0);

  const totalRow: TableRowData = {
    id: "total",
    category: "Total",
    spend: totalSpend,
    pRevenue: totalRevenue,
    iRevenue: null,
    children: [],
    contribution: null,
    isTotal: true // <-- this is the total row
  };

  // Add contribution % to Paid children
  for (const child of paidChildren) {
    const spend = child.spend ?? 0;
    child.contribution = totalSpend ? (spend / totalSpend) * 100 : null;
  }

  // Add contribution to Baseline children
  for (const child of baselineChildren) {
    const spend = child.spend ?? 0;
    child.contribution = baselineAggregate.spend
      ? (spend / (baselineAggregate.spend ?? 1)) * 100
      : null;
  }

  return [baselineAggregate, paidAggregate, totalRow];
}
