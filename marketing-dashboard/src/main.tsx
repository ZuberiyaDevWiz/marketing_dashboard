import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

import DataProvider from "./context/DataProvider.tsx";
import { TableControlProvider } from "./context/tableControls.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <TableControlProvider>
        <App />
      </TableControlProvider>
    </DataProvider>
  </StrictMode>
);
