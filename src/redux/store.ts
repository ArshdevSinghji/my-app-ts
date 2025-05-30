import { configureStore } from "@reduxjs/toolkit";
import  counterReducers  from "./counter/counterSlice";
import authReducers from "./auth/AuthSlice"

export const store = configureStore({
    reducer:{
        counter : counterReducers,
        auth: authReducers
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch