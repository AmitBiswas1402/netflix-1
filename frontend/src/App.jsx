import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				
			</Routes>
      <Footer />
    </>
  )
}

export default App
