import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<SignUp/>}/>
      <Route element = {<ProtectedRoutes/>}>
        <Route path="/" element = {<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App;