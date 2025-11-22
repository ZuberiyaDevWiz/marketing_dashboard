import React from "react";
import type { TableRowData } from "./types";
import { useRowToggle } from "./Table/useRowToggle";
import TableRow from "./context/TableRow";

interface Props {
  table: TableRowData[];
}

export default function TableView({ table }: Props) {
  const { isOpen, toggleRow } = useRowToggle();

  // Recursively render table rows
function renderRows(rows: TableRowData[], level: number): React.ReactNode[] {
  return rows.flatMap((row) => {
    const open = isOpen(row.id);
    const hasChildren = Array.isArray(row.children) && row.children.length > 0;

    return [
      <TableRow
        key={row.id}
        row={row}
        level={level}
        isOpen={open}
        hasChildren={hasChildren}
        onToggle={() => toggleRow(row.id)}
      />,
      ...(hasChildren && open ? renderRows(row.children!, level + 1) : []),
    ];
  });
}


  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Category</th>
          <th style={styles.th}>Spend</th>
          <th style={styles.th}>Revenue</th>
          <th style={styles.th}>ROAS</th>
          <th style={styles.th}>Contribution %</th>
        </tr>
      </thead>

      <tbody>{renderRows(table, 0)}</tbody>
    </table>
  );
}

// --------------------
// STYLES
// --------------------
const styles: Record<string, React.CSSProperties> = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
    border: "1px solid #e3e3e3",
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #ccc",
    background: "#f7f7f7",
    fontWeight: 600,
    fontSize: "14px",
  },
};
