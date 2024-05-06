import { useState } from "react";
import axios from 'axios'

type TLoginDetails = {
    username: string;
    password: string;
}
const useLoginUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const login = async (url: string, data: TLoginDetails) => {
        try {
            setIsLoading(true)
            const response = await axios.post(url, data)
            localStorage.setItem('user', response.data.data)
            setIsLoading(false)
            alert('success')
        } catch (err: any) {
            setIsLoading(false)
            setError(err.response.data.message || 'There was an error logging in.')
        }
    }

    return { login, error, isLoading }
}

export default useLoginUser