/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query"
import { createContext } from "react"
import fetchUsersOptions from "../../queries/fetch_users_options"
import FullPageLoader from "../../components/ui/full-page-loader"

interface UserData {
  users: any[]
}

export const data_provider = createContext<UserData>({
  users: [],
})


function UsersDataProvider({ children }: { children: React.ReactNode }) {

  const { data, isPending, error } = useQuery(fetchUsersOptions())
  return (

    <data_provider.Provider value={{ users: data! }}>

      {
        isPending && <FullPageLoader />
      }

      {
        error && <div className="text-red-500 text-center">Error: {error.message}</div>
      }

      {children}
    </data_provider.Provider>
  )
}

export default UsersDataProvider
