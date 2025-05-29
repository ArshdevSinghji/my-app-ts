import { z } from "zod"

export const SignUpSchema = z.object({
    username: z.string().nonempty("username is required"),
    email: z.string().nonempty("email is required").email(),
    password: z.string().nonempty("password is required").min(8, "password must be at least 8 characters"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "password doesn't match",
    path: ["confirmPassword"]
})

export type TSignUpSchema = z.infer<typeof SignUpSchema>    //automatically figure out the type from something else.

export interface ISignUpSchema{
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const SignInSchema = z.object({
    username: z.string().nonempty("username is required"),
    email: z.string().nonempty("email is required").email(),
    password: z.string().nonempty("password is required"),
})

export type TSignInSchema = z.infer<typeof SignInSchema>
