import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
    const { user } = useContext(UserContext)
    
  return (
    <div>Profile: {user?.username}</div>
  )
}

export default Profile