import React, { useContext } from "react"
import { AuthorizedContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes : React.FC = () => {
    // const navigate = useNavigate();
    const context = useContext(AuthorizedContext)
    if(!context) throw new Error("Error occurred!")
    const { isAuth } = context
  return isAuth ? <Outlet/> : <Navigate to = '/login'/>
}

export default ProtectedRoutes