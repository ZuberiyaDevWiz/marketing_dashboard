import type { DataAction, DataState } from "./type";

export const initialState: DataState = {
  marketing: [],
  analytics: [],
  table: [],
  loading: false,
  error: undefined,
};

export function dataReducer(state: DataState, action: DataAction): DataState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true }; // ✅ FIXED — no payload

    case "SET_DATA":
      return {
        ...state,
        marketing: action.payload.marketing,
        analytics: action.payload.analytics,
        table: action.payload.table,
        loading: false,
      };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}
