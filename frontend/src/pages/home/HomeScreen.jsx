import Navbar from "../../components/Navbar"
import { useAuthStore } from "../../store/authUser"

const HomeScreen = () => {
  const {logout} = useAuthStore()
  return (
    <>
      <Navbar />
      
      <button onClick={logout}>logout</button>
    </>
  )
}
export default HomeScreen