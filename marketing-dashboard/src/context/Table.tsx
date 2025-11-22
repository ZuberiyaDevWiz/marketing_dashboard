import React from "react";
import { useTableControls } from "../context/tableControls";
import type { TableRowData } from "../types";
import TableRow from "../context/TableRow";
import "./table.css";

export default function Table({ data }: { data: TableRowData[] }) {
  const { state, dispatch } = useTableControls();

  // ----- SORTING -----
  const sorted = React.useMemo(() => {
    if (!state.sortColumn) return data;

    return [...data].sort((a, b) => {
      const col = state.sortColumn!;
      const av = a[col] ?? 0;
      const bv = b[col] ?? 0;

      if (state.sortDirection === "asc") return Number(av) - Number(bv);
      if (state.sortDirection === "desc") return Number(bv) - Number(av);

      return 0;
    });
  }, [data, state.sortColumn, state.sortDirection]);

  // ----- PAGINATION -----
  const start = (state.page - 1) * state.pageSize;
  const end = start + state.pageSize;
  const paginated = sorted.slice(start, end);

  const totalPages = Math.ceil(sorted.length / state.pageSize);

  const sortableHeader = (label: string, column: keyof TableRowData) => (
    <th
      className="header-cell sortable"
      onClick={() => dispatch({ type: "SORT_BY", payload: column })}
    >
      {label}
      {state.sortColumn === column &&
        (state.sortDirection === "asc" ? " ↑" : " ↓")}
    </th>
  );

  return (
    <div className="table-wrapper">
      <table className="dashboard-table">
        <thead>
          <tr className="header-row">
            <th className="header-cell left">Category</th>

            {sortableHeader("Spend", "spend")}
            {sortableHeader("pRevenue", "pRevenue")}
            {sortableHeader("iRevenue", "iRevenue")}
            {sortableHeader("pROAS", "pROAS")}
            {sortableHeader("iROAS", "iROAS")}
            {sortableHeader("Contribution", "contribution")}
          </tr>
        </thead>

        <tbody>
          {paginated.map((row) => (
            <TableRow key={row.id} row={row} level={0} isOpen={false} hasChildren={false} onToggle={function (): void {
              throw new Error("Function not implemented.");
            } } />
          ))}
        </tbody>
      </table>

      {/* ------------- PAGINATION ------------- */}
      <div className="pagination">
        <button
          disabled={state.page === 1}
          onClick={() => dispatch({ type: "SET_PAGE", payload: state.page - 1 })}
        >
          Prev
        </button>

        <span>
          Page <strong>{state.page}</strong> / {totalPages}
        </span>

        <button
          disabled={state.page === totalPages}
          onClick={() => dispatch({ type: "SET_PAGE", payload: state.page + 1 })}
        >
          Next
        </button>

        <select
          value={state.pageSize}
          onChange={(e) =>
            dispatch({
              type: "SET_PAGE_SIZE",
              payload: Number(e.target.value)
            })
          }
        >
          <option value={10}>10 rows</option>
          <option value={20}>20 rows</option>
          <option value={50}>50 rows</option>
          <option value={100}>100 rows</option>
        </select>
      </div>
    </div>
  );
}
