import { useContext } from "react";
import { data_provider } from "../services/providers/data-provider";

export default function useData() {

  const values = useContext(data_provider)

  if (!values) {
    throw new Error("useData must be used within a DataProvider");
  }

  return values;

}
