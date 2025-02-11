import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuthStore } from "./store/authUser";
import { Loader } from "lucide-react";
import WatchPage from "./pages/WatchPage.jsx";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log("Auth is here", user);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to={"/"} />}
        />
        <Route
          path="/watch/:id"
          element={user ? <WatchPage /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
