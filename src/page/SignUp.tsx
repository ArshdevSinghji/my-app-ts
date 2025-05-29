import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpSchema, type ISignUpSchema } from "../services/types"
import { useContext } from "react"
import { AuthorizedContext } from "../context/AuthContext"

const SignUp = () => {
    const navigate = useNavigate()

    const context = useContext(AuthorizedContext)
    if(!context){
        throw new Error("Error while dealing with contexts!")
    }

    const { setUser } = context;

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<ISignUpSchema>({
        resolver : zodResolver(SignUpSchema)
    });

    const onSubmit = (data : ISignUpSchema) => {
        setUser({
            username: data.username,
            email: data.email,
            password: data.password
        })
        reset();
        navigate("/login")
    }

  return (
    <div className="auth-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>create a new account</p>
            <div>
                {errors.username && 
                    (<p className="error">{errors.username.message}</p>)}
                <input 
                    {
                        ...register("username")
                    }
                    type = 'text' placeholder='username' aria-label='username'/>
            </div>
        
            <div>
                {errors.email &&
                    (<p className="error">{errors.email.message}</p>)}
                <input 
                    {
                        ...register("email")
                    }
                    type = 'email' placeholder='emailID' aria-label='emailID'/>
            </div>        
            
            <div>
                {errors.password &&
                    (<p className="error">{errors.password.message}</p>)}
                <input 
                    {
                        ...register("password")
                    }
                    type = 'password' placeholder='password' aria-label='password'/>
            </div>

            <div>
                {errors.confirmPassword &&
                    (<p className="error">{errors.confirmPassword.message}</p>)}
                <input 
                    {
                        ...register("confirmPassword")
                    }
                    type = "password" placeholder='confirm password' aria-label='confirm password'/>
            </div>

            <input 
                disabled = {isSubmitting}
                type="submit" value={"register"}/>

            <p>already have an account? <Link to={"/login"}>sign in</Link></p>
        </form>
    </div>
  )
}

export default SignUp