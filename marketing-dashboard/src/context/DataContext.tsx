import { createContext, useContext } from "react";
import type { DataState, DataAction } from "./type";

export const DataContext = createContext<{
  state: DataState;
  dispatch: React.Dispatch<DataAction>;
}>({
  state: {
    marketing: [],
    analytics: [],
    table: [],
    loading: false,
    error: undefined,
  },
  dispatch: () => {},
});

// Custom Hook
export function useData() {
  return useContext(DataContext);
}
