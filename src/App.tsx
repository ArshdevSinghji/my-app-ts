import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Counter from "./components/Counter";
import Todo from "./page/Todo";
import Post from "./page/Post";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/count" element={<Counter />} />
      <Route element={<ProtectedRoutes />}></Route>
      <Route path="/todo" element={<Todo />} />
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Post />} />
    </Routes>
  );
};

export default App;
