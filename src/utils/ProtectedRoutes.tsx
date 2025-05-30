import React, { useContext } from "react"
import { AuthorizedContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

const ProtectedRoutes : React.FC = () => {
    // const navigate = useNavigate();
    const context = useContext(AuthorizedContext)
    if(!context) throw new Error("Error occurred!")
    // const { isAuth } = context

    const isAuth = useAppSelector(state => state.auth.isAuth)

  return isAuth ? <Outlet/> : <Navigate to = '/login'/>
}

export default ProtectedRoutes