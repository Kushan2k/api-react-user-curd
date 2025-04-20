import { createContext, useState } from "react"
import FullPageLoader from "../../components/ui/full-page-loader"

interface UserContext {
  user: {
    email: string,
    password: string,
  } | null,
  login: (email: string, password: string) => void,
  isLoading: boolean,
}

export const user_context = createContext<UserContext>({
  user: null,
  login: () => { },
  isLoading: false,
})

function UserStateProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<{ email: string, password: string } | null>(null)
  const [isLoadning, setIsLoading] = useState(false)

  async function login(email: string, password: string) {
    setIsLoading(true)

    setUser({
      email,
      password,
    })
    //mock api call
    await new Promise((resolve) => setInterval(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <user_context.Provider value={{
      user: user,
      login,
      isLoading: isLoadning,
    }}>
      {isLoadning ? <FullPageLoader /> : children}
    </user_context.Provider>
  )
}

export default UserStateProvider
