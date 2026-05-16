import { LuLock, LuMail } from "react-icons/lu"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
    }
    return (
        <main className="flex items-center justify-center h-screen px-2">
            <form onSubmit={handleSubmit} className="max-w-96 w-full text-center shadow-lg border border-gray-300/60 rounded-2xl px-4 sm:px-8 bg-white">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
                <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
                <div className="space-y-4 mt-10">
                    <Input icon={<LuMail />} type="email" value={loginData.email} name="email" onChange={handleChange} placeholder="Enter Email" required />
                    <Input icon={<LuLock />} value={loginData.password} name="password" onChange={handleChange} type="password" placeholder="Enter Password" required />
                </div>
                <div className="mt-5 text-left text-indigo-500">
                    <button className="text-sm">Forgot password?</button>
                </div>

                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                    Login
                </button>
                <p className="text-gray-500 text-sm mt-3 mb-11">Don’t have an account?
                    <button onClick={() => navigate("/sign-up")} className="text-indigo-500 hover:underline" href="#">Sign up</button>
                </p>
            </form>
        </main>
    )
}

export default Login