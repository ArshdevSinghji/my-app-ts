import { useState, createContext, type ReactNode } from "react"

type User = {
  username: string,
  email: string,
  password: string
}

interface AuthContextType{
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  isAuth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean | false>>
}

export const AuthorizedContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps{
  children: ReactNode
}

const AuthProvider: React.FC <AuthProviderProps> = ({children}) => {    //(props) => { .. {props.children} .. }

  const [user, setUser] = useState<User | null>(null)
  const [isAuth, setAuth] = useState<boolean>(false)

  return (
    <AuthorizedContext.Provider value = {{ user, setUser, isAuth, setAuth }}>
      {children}
    </AuthorizedContext.Provider>)}

export default AuthProvider