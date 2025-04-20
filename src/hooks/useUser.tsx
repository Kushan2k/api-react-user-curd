import { useContext } from "react";
import { user_context } from "../services/providers/user-provider";


export default function useUser() {

  const values = useContext(user_context)
  if (!values) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return values

}
