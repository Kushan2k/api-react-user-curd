import useUser from "../hooks/useUser"


function LoginPage() {

  const { login } = useUser()
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          onClick={() => {
            login('ksuahnsdfsd', 'sdfsdfsdfsdf')
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default LoginPage
