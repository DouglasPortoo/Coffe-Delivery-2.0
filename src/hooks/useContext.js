import { useContext } from "react";
import { ApptContext } from "./context";

export function useContex() {
  const context = useContext(ApptContext);

  return context;
}
