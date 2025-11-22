import React from "react";
import type { TableRowData } from "../types";

interface Props {
  row: TableRowData;
  level: number;
  isOpen: boolean;
  hasChildren: boolean;
  onToggle: () => void;
}

export default function TableRow({
  row,
  level,
  isOpen,
  hasChildren,
  onToggle,
}: Props) {
  return (
    <tr>
   <td style={{ ...styles.td, paddingLeft: level * 20 }}>
  <div style={{ display: "flex", alignItems: "center" }}>
    {hasChildren ? (
      <button
        style={{
          ...styles.toggleBtn,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          padding: 0,
        }}
        onClick={onToggle}
      >
        {isOpen ? "−" : "+"}
      </button>
    ) : (
      <span style={{ display: "inline-block", width: 22 }}></span>
    )}

    <span style={{ marginLeft: 8, ...(hasChildren ? styles.bold : {}) }}>
      {row.category}
    </span>
  </div>
</td>


      <td style={styles.td}>{row.spend ?? "-"}</td>
      <td style={styles.td}>{row.pRevenue ?? "-"}</td>
      <td style={styles.td}>{row.pROAS ? row.pROAS.toFixed(2) : "-"}</td>
      <td style={styles.td}>
        {row.contribution ? row.contribution.toFixed(2) + "%" : "-"}
      </td>
    </tr>
  );
}

const styles: Record<string, React.CSSProperties> = {
  td: {
    padding: "8px 10px",
    borderBottom: "1px solid #e3e3e3",
    fontSize: "14px",
  },
  toggleBtn: {
    width: 22,
    height: 22,
    marginRight: 8,
    border: "1px solid #aaa",
    borderRadius: 4,
    fontSize: 14,
    cursor: "pointer",
    background: "#fafafa",
  },
  bold: {
    fontWeight: 600,
  },
};
