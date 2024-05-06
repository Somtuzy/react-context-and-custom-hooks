import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log('USER INSIDE PROFILE:', user);
    
  return (
    <div>Profile: {user?.username}</div>
  )
}

export default Profile