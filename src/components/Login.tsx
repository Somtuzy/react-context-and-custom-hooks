import { FormEvent, useState } from "react"
import useLoginUser from "../hooks/useLoginUser"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLoginUser()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await login('/api/v1/login', { username, password})
    }

    const h1Style = { textAlign: 'center', padding: '10px' } as any
    const formDivStyle = { margin: '20px' }
    const labelStyle = { padding: '10px' }
    const labelDivStyle = { padding: '12px 0' }
    const inputStyle = { width: '100%', height: '30px' }
    
    return (
        <>
        <div>
            <h1 style={h1Style}>Login</h1>
            <div style={formDivStyle}>
                <form action="" onSubmit={handleSubmit}>
                    <div style={labelDivStyle}>
                        <label htmlFor="username" style={labelStyle}> Username
                            <input type="text"
                                value={username}
                                id="username"
                                style={inputStyle}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>

                    <div style={labelDivStyle}>
                        <label htmlFor="password" style={labelStyle}> Password
                            <input type="password"
                                value={password}
                                id="password"
                                style={inputStyle}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                    {!isLoading && <button type="submit">Submit</button>}
                    <p>{error}</p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login