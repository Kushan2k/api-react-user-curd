import { useEffect, useState } from "react"
import useData from "../../hooks/useData"


function SearchFilterRow() {

  const { users, setUsers } = useData()

  const [data] = useState(users)

  const [search, setSearch] = useState("")

  useEffect(() => {

    if (search.length > 0) {
      const filteredData = data.filter((user) => {
        return user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
      })
      if (setUsers) {
        setUsers(filteredData)
      }
    } else {
      if (setUsers) {
        setUsers(data)
      }
    }
  }, [search])

  return (
    <div className="flex gap-2 items-center">
      <div className="w-2/3">
        <input value={search} onChange={e => setSearch(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
      </div>
    </div>
  )
}

export default SearchFilterRow
