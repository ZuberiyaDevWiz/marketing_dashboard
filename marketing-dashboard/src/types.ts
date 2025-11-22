// shared types
export interface MarketingRow {
  id: number | string;
  channel: string;
  region?: string;
  spend?: number;
  impressions?: number;
  conversions?: number;
  clicks?: number;
}

export interface AnalyticsRow {
  id: number | string;
  campaign?: string;
  channel?: string;
  region?: string;
  date?: string;
  clicks?: number;
  impressions?: number;
  conversions?: number;
  spend?: number;
  revenue?: number;
}

export interface DesignToken {
  token_id: string;
  theme?: string;
  component?: string;
  variant?: string;
  font_family?: string;
  font_size?: string;
  primary_color?: string;
  secondary_color?: string;
  border_radius?: string;
  spacing?: string;
  shadow?: string;
  animation_duration?: string;
}

export interface TableRowData {
  isTotal: boolean;
  id: string;
  category: string;
  spend?: number | null;
  pRevenue?: number | null;
  iRevenue?: number | null;
  pROAS?: number | null;
  iROAS?: number | null;
  contribution?: number | null;
  confidence?: string | null;
  iFactor?: number | null;
  mROAS?: number | null;
  iProfit?: number | null;
  iPOAS?: number | null;
  margin?: number | null;
  causal?: string | null;
  children?: TableRowData[];
}
