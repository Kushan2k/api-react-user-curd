import { useState } from "react"
import useData from "../../hooks/useData"
import toast from "react-hot-toast";

interface UserForm {
  onClose: () => void;
  user?: {
    id: number
    firstName: string
    lastName: string
    age: number
    email: string
    phone: string
    image: string
  }
}


// Dummy images for the user
const random_images = [
  'https://dummyjson.com/icon/jamesd/128',
  'https://dummyjson.com/icon/sophiab/128',
  'https://dummyjson.com/icon/adamw/128',
  'https://dummyjson.com/icon/avat/128',
  'https://dummyjson.com/icon/logant/128',
  'https://dummyjson.com/icon/madisonc/128',
  'https://dummyjson.com/icon/evelyng/128'

]

function UserAddForm({ onClose, user }: UserForm) {

  const [inputs, setInputs] = useState({
    first_name: user?.firstName || '',
    last_name: user?.lastName || '',
    email: user?.email || '',
    age: user?.age || '',
    mobile: user?.phone || ''
  })

  //get users from context
  const { users, setUsers } = useData()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    //check if all fields are filled
    if (!inputs.first_name || !inputs.last_name || !inputs.email || !inputs.age || !inputs.mobile) {
      toast.error('Please fill all fields')
      return
    }

    //check if user exists


    //if user exists update it
    if (user) {
      const updatedUser = users.find((u) => u.id === user.id)

      if (!updatedUser) {
        toast.error('User not found')
        return
      }
      if (updatedUser) {
        updatedUser.firstName = inputs.first_name
        updatedUser.lastName = inputs.last_name
        updatedUser.email = inputs.email
        updatedUser.age = inputs.age
        updatedUser.phone = inputs.mobile
        if (setUsers) {
          setUsers([...users])
        }
        toast.success('User updated successfully')
      }
    } else {
      const foundUser = users.find((user) => user.email === inputs.email)
      if (foundUser) {
        toast.error('User already exists')
        return
      }

      //if user does not exist create it
      const newUser = {
        id: users.length + 1,
        firstName: inputs.first_name,
        lastName: inputs.last_name,
        email: inputs.email,
        age: inputs.age,
        phone: inputs.mobile,
        image: random_images[Math.floor(Math.random() * random_images.length)],
      }
      if (setUsers) {
        setUsers([newUser, ...users])
        toast.success('User created successfully')
      }
    }

    //close the modal
    onClose()
  }

  return (
    <form onSubmit={submit} className="mt-8 mb-2 mx-auto">
      <div className="mb-1 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full flex flex-col items-start">
            <label className="block mb-2 text-sm text-slate-600">
              Your First Name
            </label>
            <input type="text" value={inputs.first_name} onChange={e => setInputs({ ...inputs, first_name: e.target.value })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
          </div>
          <div className="w-full flex flex-col items-start">
            <label className="block mb-2 text-sm text-slate-600">
              Your Last Name
            </label>
            <input type="text" value={inputs.last_name} onChange={e => setInputs({ ...inputs, last_name: e.target.value })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
          </div>
        </div>
        <div className="w-full flex flex-col items-start">
          <label className="block mb-2 text-sm text-slate-600">
            Email
          </label>
          <input type="email" value={inputs.email} onChange={e => setInputs({ ...inputs, email: e.target.value })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full flex flex-col items-start">
            <label className="block mb-2 text-sm text-slate-600">
              Age
            </label>
            <input type="number" value={inputs.age} onChange={e => setInputs({ ...inputs, age: e.target.value })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
          </div>
          <div className="w-full flex flex-col items-start">
            <label className="block mb-2 text-sm text-slate-600">
              Mobile Number
            </label>
            <input type="tel" value={inputs.mobile} onChange={e => setInputs({ ...inputs, mobile: e.target.value })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end mt-5">
        <button type="submit" style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          {user ? 'Update' : 'Create'} User
        </button>
      </div>

    </form>
  )
}

export default UserAddForm
