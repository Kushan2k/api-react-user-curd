/* eslint-disable @typescript-eslint/no-explicit-any */
import UserCard from '../components/user-card'
import '../App.css'
import useData from '../hooks/useData'
import NavBar from '../components/ui/navbar'

function HomePage() {

  const { users } = useData()

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        {
          users && users.map((user: any) => (
            <UserCard user={{
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
      </div>

    </>
  )
}

export default HomePage
