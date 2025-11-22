import { useState } from "react";

export function useRowToggle() {
  const [openRows, setOpenRows] = useState<Record<string, boolean>>({});

  function toggleRow(id: string) {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function isOpen(id: string) {
    return !!openRows[id];
  }

  return { isOpen, toggleRow };
}
