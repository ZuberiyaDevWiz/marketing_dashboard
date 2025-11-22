import { createContext, useReducer, useContext } from "react";
import type { TableRowData } from "../types";

// ----------------------
// STATE
// ----------------------
export interface TableControlState {
  page: number;
  pageSize: number;
  sortColumn: keyof TableRowData | null;
  sortDirection: "asc" | "desc" | null;
  filterText: string;
}

export const initialTableControlState: TableControlState = {
  page: 1,
  pageSize: 10,
  sortColumn: null,
  sortDirection: null,
  filterText: "",
};

// ----------------------
// ACTIONS
// ----------------------
type TableControlAction =
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_PAGE_SIZE"; payload: number }
  | { type: "SET_SORT"; payload: keyof TableRowData }
  | { type: "SET_FILTER"; payload: string };

// ----------------------
// REDUCER
// ----------------------
function tableControlReducer(
  state: TableControlState,
  action: TableControlAction
): TableControlState {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };

    case "SET_PAGE_SIZE":
      return { ...state, pageSize: action.payload, page: 1 };

    case "SET_SORT":
      if (state.sortColumn === action.payload) {
        if (state.sortDirection === "asc")
          return { ...state, sortDirection: "desc" };

        if (state.sortDirection === "desc")
          return { ...state, sortColumn: null, sortDirection: null };

        return { ...state, sortDirection: "asc" };
      }

      return {
        ...state,
        sortColumn: action.payload,
        sortDirection: "asc",
      };

    case "SET_FILTER":
      return { ...state, filterText: action.payload, page: 1 };

    default:
      return state;
  }
}

// ----------------------
// CONTEXT
// ----------------------
export const TableControlContext = createContext<{
  state: TableControlState;
  dispatch: React.Dispatch<TableControlAction>;
}>({
  state: initialTableControlState,
  dispatch: () => {},
});

// ----------------------
// PROVIDER
// ----------------------
export function TableControlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(
    tableControlReducer,
    initialTableControlState
  );

  return (
    <TableControlContext.Provider value={{ state, dispatch }}>
      {children}
    </TableControlContext.Provider>
  );
}

// ----------------------
// HOOK
// ----------------------
export const useTableControls = () => useContext(TableControlContext);
