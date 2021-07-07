import axios from "axios"

export async function authenticate(email: string, password: string): Promise<string> {
    return (await axios.post(`${process.env.REACT_APP_API_URL}api/auth/login`, { email: email, password: password })).data.access_token
}