import { Link, Navigate, Outlet } from "react-router"
import useUser from "../hooks/useUser"


function AuthLayout() {

  const { user } = useUser()

  if (user) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <div className="flex w-full">
        <div className="container flex flex-col items-center justify-center mx-auto text-slate-800">
          <Link to={'/'}>
            <p
              className="mr-4 text-2xl block cursor-pointer py-1.5 text-slate-800 font-semibold">
              Assesment
            </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
