import React from "react";
import { useData } from "./context/DataContext";
import TableView from "./TableView";

function App() {
  const { state } = useData();

  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.heading}>Marketing Performance Dashboard</h1>

      {/* Loading State */}
      {state.loading && <p style={styles.statusText}>Loading data…</p>}

      {/* Error State */}
      {state.error && (
        <p style={{ ...styles.statusText, color: "#e74c3c" }}>
          {state.error}
        </p>
      )}

      {/* Table */}
      {!state.loading && !state.error && (
        <div style={styles.tableWrapper}>
          <TableView table={state.table} />
        </div>
      )}
    </div>
  );
}

export default App;

// --------------------
// TypeScript-safe inline styles
// --------------------
const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "#e8ebf0",
    padding: "40px 20px",
    textAlign: "center", // center heading and table wrapper
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // center everything horizontally
  },
  heading: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "30px",
    color: "#2c3e50",
  },
  statusText: {
    fontSize: "18px",
    margin: "15px 0",
    color: "#34495e",
  },
tableWrapper: {
  display: "flex",
  justifyContent: "center", // centers the table inside the wrapper
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  overflowX: "auto",
}

};
