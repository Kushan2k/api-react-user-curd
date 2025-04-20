import { Trash } from "lucide-react"
import useData from "../../hooks/useData"
import toast from "react-hot-toast"

interface UserDeleteButtonProps {
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



function UserDeleteButton({ user }: UserDeleteButtonProps) {

  const { users, setUsers } = useData()

  function delete_user() {

    const found_user = users.find((u) => u.id === user.id)
    if (found_user) {
      const updatedUsers = users.filter((u) => u.id !== user.id)
      if (setUsers) {
        setUsers(updatedUsers)
        toast.success("User deleted successfully")
      } else {
        toast.error("Failed to delete user")
        return
      }


    } else {
      toast.error("User not found")
    }
  }
  return (
    <div>
      <button style={{
        backgroundColor: 'white',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',

      }}
        onClick={() => delete_user()}
      >
        <Trash fill="red" size={15} color="red" />
      </button>
    </div>
  )
}

export default UserDeleteButton
