import { useState } from "react";
import axios from 'axios'

type TLoginDetails = {
    username: string;
    password: string;
}
const useLoginUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const login = async (data: TLoginDetails) => {
        try {
            setIsLoading(true)
            const response = await axios.post('/gaggaa', data)
            localStorage.setItem('user', response.data.data)
            setIsLoading(false)
            alert('success')
        } catch (err: any) {
            setIsLoading(false)
            console.log('LOGIN Failed:', data, err);
            setError('login has failed o')
        }
    }

    return { login, error, isLoading }
}

export default useLoginUser