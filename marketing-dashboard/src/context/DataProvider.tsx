import React, { useReducer, useEffect } from "react";

import { DataContext } from "./DataContext";
import { dataReducer, initialState } from "./dataReducer";
import { setLoading,setData,setError } from "./actions";

import { loadMarketing, loadAnalytics } from "../api/dataLoader";
import { buildTableTree } from "../utils/aggregate";

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setLoading());

        const [marketing, analytics] = await Promise.all([
          loadMarketing(),
          loadAnalytics(),
        ]);

        const table = buildTableTree(marketing, analytics);

        dispatch(setData(marketing, analytics, table));
      } catch (err: any) {
        dispatch(setError(err.message || "Error loading data"));
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
