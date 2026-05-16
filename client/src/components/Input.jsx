import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = props.type === "password";

    return (
        <div
            className="flex items-center relative gap-3 w-full max-w-md px-5 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus-within:border-gray-500 transition"
        >
            <span className="text-gray-500">{props.icon}</span>

            <input
                {...props}
                type={isPassword ? (showPassword ? "text" : "password") : props.type || "text"}
                className="w-full outline-none text-sm bg-transparent text-gray-700 placeholder:text-gray-400"
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            )}
        </div>
    )
}

export default Input