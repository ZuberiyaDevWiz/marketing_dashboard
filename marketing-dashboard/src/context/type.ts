import type { MarketingRow, AnalyticsRow, TableRowData } from "../types";

// -------------------------
// STATE TYPE
// -------------------------
export interface DataState {
  marketing: MarketingRow[];
  analytics: AnalyticsRow[];
  table: TableRowData[];
  loading: boolean;
  error?: string;
}

// -------------------------
// ACTION TYPE
// -------------------------
export type DataAction =
  | {
      type: "SET_LOADING";   // ❗ No payload here
    }
  | {
      type: "SET_DATA";
      payload: {
        marketing: MarketingRow[];
        analytics: AnalyticsRow[];
        table: TableRowData[];
      };
    }
  | {
      type: "SET_ERROR";
      payload: string;
    };
