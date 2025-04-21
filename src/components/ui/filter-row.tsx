import { useEffect, useState } from "react"
import useData from "../../hooks/useData"


function SearchFilterRow() {

  const { users, setUsers } = useData()

  const [data] = useState(users)

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("all")

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


  useEffect(() => {
    if (sort === "age") {
      const sortedData = [...users].sort((a, b) => a.age - b.age)
      if (setUsers) {
        setUsers(sortedData)
      }
    } else if (sort === "name") {
      const sortedData = [...users].sort((a, b) => a.firstName.localeCompare(b.firstName))
      if (setUsers) {
        setUsers(sortedData)
      }
    } else if (sort === "email") {
      const sortedData = [...users].sort((a, b) => a.email.localeCompare(b.email))
      if (setUsers) {
        setUsers(sortedData)
      }
    } else {
      if (setUsers) {
        setUsers(data)
      }
    }
  }, [sort])

  return (
    <div className="flex gap-2 items-center">
      <div className="w-2/3">
        <input value={search} onChange={e => setSearch(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
      </div>
      <div>
        <div className="w-full flex gap-x-3 items-center">
          <label htmlFor="">Sort by</label>
          <div className="relative">

            <select

              value={sort}
              onChange={e => setSort(e.target.value)}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="all" selected>All</option>
              <option value="age">Age</option>
              <option value="name">Name</option>
              <option value="email">Email</option>

            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilterRow
