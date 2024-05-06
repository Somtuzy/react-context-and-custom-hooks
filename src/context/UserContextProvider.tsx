import { useState } from "react"
import UserContext from "./UserContext"
import useGetLoggedInUser from "../hooks/useGetLoggedInUser"

const UserContextProvider = ({ children }: { children: any }) => {
    const loggedInUser = useGetLoggedInUser()
    const [user, setUser] = useState(loggedInUser)
    console.log('USER INSIDE CONTEXT:', user);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider