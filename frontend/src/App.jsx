import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
      <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				
			</Routes>
    </>
  )
}

export default App
