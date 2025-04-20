
import useUser from "../hooks/useUser"
import UserDeleteButton from "./ui/user-delete-button"
import UserEditModel from "./ui/user-edit-model"


interface UserCardProps {
  user: {
    id: number
    firstName: string
    lastName: string
    age: number
    email: string
    phone: string
    image: string
  }
}

function UserCard({ user }: UserCardProps) {

  const { user: auth } = useUser()
  return (
    <div className="user hover:scale-105 p-1 border-[0.5px] border-gray-300 hover:cursor-pointer hover:transition flex items-center text-center flex-col sm:flex-row sm:text-left">
      <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
        <img className="avatar w-20 h-20 rounded-full" src={user.image} />
      </div>
      <div className="user-body w-full flex flex-col mb-4 sm:mb-0 ">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <a href="#" className="title font-medium no-underline capitalize">{user.firstName} {user.lastName}</a>

          {
            auth && (
              <div className="flex gap-x-2 my-3 md:my-0">

                <UserEditModel user={user} />
                <UserDeleteButton user={user} />


              </div>
            )
          }
        </div>
        <div className="skills flex flex-col">
          <span className="subtitle text-slate-500">{user.age}</span>
          <span className="subtitle text-slate-500 hidden md:block">{user.email}</span>
          <span className="subtitle text-slate-500">{user.phone}</span>
        </div>
      </div>
    </div>
  )
}

export default UserCard
