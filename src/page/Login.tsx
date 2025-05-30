import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { SignInSchema, type TSignInSchema } from "../services/types"
import { useContext } from "react"
import { AuthorizedContext } from "../context/AuthContext"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setAuth } from "../redux/auth/AuthSlice"

const Login = () => {
    const navigate = useNavigate();

    const context = useContext(AuthorizedContext)
    if(!context) throw new Error("Error dealing with context");

    // const { user, setAuth } = context;

    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()

    const{
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm<TSignInSchema>({
        resolver: zodResolver(SignInSchema)
    })

  return (
    <div className="auth-container">
        <form onSubmit={handleSubmit(data => {
            if(user?.username === data.username && 
                user?.email === data.email &&
                user?.password === data.password
            ){
                // setAuth(true);
                
                dispatch(setAuth(true))

                navigate("/");
            }
            reset();
        })}>
            <p>put in your credentials</p>
            <div>
                {errors.username && <p className="error">{errors.username.message}</p>}
                <input
                    {
                        ...register("username")
                    } 
                    type = 'text' placeholder='username' aria-label='username'/>
            </div>
            <div>
                {errors.email && <p className="error">{errors.email.message}</p>}
                <input
                    {
                        ...register("email")
                    } 
                    type = 'email' placeholder='emailID' aria-label='emailID'/>
            </div>
            <div>
                {errors.password && <p className="error">{errors.password.message}</p>}
                <input
                    {
                        ...register("password")
                    } 
                    type = 'password' placeholder='password' aria-label='password'/>
            </div>
            <input
                disabled = {isSubmitting} 
                type="submit" value={"submit"}/>
            <p>don't have an account? <Link to={"/signup"}>sign up</Link></p>
        </form>
    </div>
  )
}

export default Login