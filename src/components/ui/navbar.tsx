import { Link } from "react-router"
import useUser from "../../hooks/useUser"
import { Plus } from "lucide-react"

function NavBar() {

  const { user } = useUser()
  return (
    <nav className="block w-full mb-5">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a href="#"
          className="mr-4 text-2xl block cursor-pointer py-1.5 text-slate-800 font-semibold">
          Assesment
        </a>
        <div className="">
          <ul className="flex flex-col gap-2">
            <li
              className="flex items-center p-1 text-sm gap-x-2 text-slate-600">


              {
                !user ? (
                  <Link to={'/login'}>
                    <span className=" font-semibold m-2 bg-black rounded-md text-white p-3">Login</span>
                  </Link>
                ) : (
                  <button style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'

                  }}>
                    <Plus fill="white" />
                  </button>
                )
              }
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
