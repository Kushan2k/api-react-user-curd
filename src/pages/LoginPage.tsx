import { useState } from "react"
import useUser from "../hooks/useUser"
import toast from "react-hot-toast"


function LoginPage() {

  const { login } = useUser()

  const [data, setData] = useState<{ email: string, password: string }>({
    email: '',
    password: ''
  })

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!data.email || !data.password) {
      toast.error("Please fill all fields")
      return
    }
    if (!data.email.includes('@')) {
      toast.error("Please enter a valid email")
      return
    }
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }
    if (data.password.length > 20) {
      toast.error("Password must be at most 20 characters")
      return
    }
    login(data.email, data.password)
    setData({ email: '', password: '' })
    toast.success("Login successful")
  }
  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl bg-transparent">
      <h4 className="block text-3xl font-medium text-slate-800 text-left">
        Sign In
      </h4>

      <form onSubmit={submit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">

          <div className="w-full max-w-sm min-w-[200px] flex items-start flex-col">
            <label className="block mb-2 text-sm text-slate-600">
              Email
            </label>
            <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
          </div>
          <div className="w-full max-w-sm min-w-[200px] flex items-start flex-col">
            <label className="block mb-2 text-sm text-slate-600">
              Password
            </label>
            <input value={data.password} onChange={e => setData({ ...data, password: e.target.value })} type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
          </div>
        </div>

        <div className="flex items-center justify-start mt-5">
          <button style={{
            background: 'linear-gradient(90deg, #000000 0%, #434343 100%)',
            borderRadius: '8px',
            padding: '10px 20px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'lighter',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }} type="submit">
            Sign Up
          </button>
        </div>

      </form>
    </div>
  )
}

export default LoginPage
