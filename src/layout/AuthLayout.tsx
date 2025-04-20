import { Navigate, Outlet } from "react-router"
import useUser from "../hooks/useUser"


function AuthLayout() {

  const { user } = useUser()

  if (user) {
    return <Navigate to={'/'} />
  }

  return <Outlet />
}

export default AuthLayout
