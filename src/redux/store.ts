import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counter/counterSlice";
import authReducers from "./auth/AuthSlice";
import todoReducers from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducers,
    auth: authReducers,
    todo: todoReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
