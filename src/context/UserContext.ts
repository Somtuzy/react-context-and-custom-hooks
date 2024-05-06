import { createContext } from "react";

type TUser = {
    username: string
}

type TSetUser = (user: TUser  | null | ((user: TUser) => void)) => void

 type TUserContext ={
    user: TUser | null,
    setUser: TSetUser | null
 }
const UserContext = createContext<TUserContext>({
    user: null,
    setUser: null
})

export default UserContext