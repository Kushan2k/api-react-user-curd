import { Link } from "react-router"
import useUser from "../../hooks/useUser"

function NavBar() {

  const { user } = useUser()
  return (
    <nav className="block w-full mb-5">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
          Assesment
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li
              className="flex items-center p-1 text-sm gap-x-2 text-slate-600">


              {
                !user && <Link to={'/login'}>
                  <span className="text-slate-800 font-semibold m-2 bg-black rounded-md text-white p-3">Login</span>
                </Link>
              }
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
