/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react"
import FullPageLoader from "../../components/ui/full-page-loader"

interface UserData {
  users: any[],
  setUsers?: React.Dispatch<React.SetStateAction<any[]>>
}

export const data_provider = createContext<UserData>({
  users: [],
  setUsers: () => { }
})


function UsersDataProvider({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any[]>([])

  async function fetchUsers(): Promise<any[]> {

    const response = await fetch('https://dummyjson.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return (await response.json())['users'];

  }

  useEffect(() => {

    (async () => {
      try {
        setLoading(true)
        const data = await fetchUsers()
        setData(data)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (er: any) {
        setData([])
      } finally {
        setLoading(false)
      }
    })()

  }, [])

  return (

    <data_provider.Provider value={{ users: data, setUsers: setData }}>

      {
        loading && <FullPageLoader />
      }
      {children}
    </data_provider.Provider>
  )
}

export default UsersDataProvider
