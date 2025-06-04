import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counter/counterSlice";
import authReducers from "./auth/AuthSlice";
import todoReducers from "./todo/todoSlice";
import postReducers from "./post/postSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "posts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, postReducers);

export const store = configureStore({
  reducer: {
    counter: counterReducers,
    auth: authReducers,
    todo: todoReducers,
    post: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
