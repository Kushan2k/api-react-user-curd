/* eslint-disable @typescript-eslint/no-explicit-any */
import UserCard from '../components/user-card'
import '../App.css'
import useData from '../hooks/useData'
import NavBar from '../components/ui/navbar'
import SearchFilterRow from '../components/ui/filter-row'

function HomePage() {

  const { users } = useData()

  return (
    <>
      <NavBar />
      <SearchFilterRow />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {
          users && users.map((user: any, index: number) => (
            <UserCard key={index} user={{
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              age: user.age,
              email: user.email,
              phone: user.phone,
              image: user.image,
            }} />
          ))
        }
        {
          users && users.length === 0 && (
            <div className="flex justify-center items-center">
              <p className="text-lg font-semibold text-gray-500 text-center">No Users Found</p>
            </div>
          )
        }
      </div>

    </>
  )
}

export default HomePage
