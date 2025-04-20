import { useState } from "react"
import Modal from "./model"
import { Pencil } from "lucide-react"
import UserAddForm from "./user-add-form"

interface UserEditModelProps {
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

function UserEditModel({ user }: UserEditModelProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <button style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',

      }}
        onClick={() => setIsModalOpen(true)}
      >
        <Pencil fill="white" size={15} color="white" />
      </button>
      <Modal title="Create a User" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserAddForm user={user} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  )
}

export default UserEditModel
