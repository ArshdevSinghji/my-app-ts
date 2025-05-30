import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User{
    username: string,
    password: string,
    email: string
};

interface AuthState{
    user: User | null,
    isAuth: boolean
};

const initialState: AuthState = {
    user: null,
    isAuth: false
}

export const AuthSlice = createSlice({
    name: "Authorization",
    initialState,
    reducers:{
        setUser(state, action: PayloadAction<User | null>){
            state.user = action.payload
        },
        setAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload
        }
    }
})

export const { setUser, setAuth } = AuthSlice.actions
export default AuthSlice.reducer