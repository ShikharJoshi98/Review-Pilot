import { LuLock, LuMail, LuUser } from "react-icons/lu"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerData)
    }
    return (
        <main className="flex items-center justify-center w-full h-screen p-4">
            <form onSubmit={handleSubmit} className="flex w-full flex-col max-w-96">
                <h2 className="text-3xl font-medium text-gray-900">Sign up</h2>
                <p className="mt-2 text-sm text-gray-500/90">
                    Please enter your details to access.
                </p>
                <div className="mt-6">
                    <label htmlFor="fullName" className="font-medium text-neutral-700 mb-2 block">Enter full name</label>
                    <Input id="fullName" icon={<LuUser />} value={registerData.fullName} name="fullName" onChange={handleChange} placeholder="Enter name" required />
                </div>
                <div className="mt-6">
                    <label htmlFor="mail" className="font-medium text-neutral-700 mb-2 block">Email</label>
                    <Input id="mail" icon={<LuMail />} type="email" value={registerData.email} name="email" onChange={handleChange} placeholder="Enter Email" required />
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="font-medium text-neutral-700 mb-2 block">Password</label>
                    <Input id="password" icon={<LuLock />} type="password" value={registerData.password} name="password" onChange={handleChange} placeholder="Enter Password" required />
                </div>
                <button
                    type="submit"
                    className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
                >
                    Sign Up
                </button>
                <p className='text-center py-8'>
                    Already have an account? <button onClick={() => navigate("/login")} className="text-indigo-600 hover:underline">Login</button>
                </p>
            </form>
        </main>
    )
}

export default Signup