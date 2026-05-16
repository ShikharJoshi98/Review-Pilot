import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuLogOut } from "react-icons/lu";
import { sideNav } from "../constants/dashboard";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const [isSideNav, setSideNav] = useState(true);
    const location = useLocation();

    return (
        <aside
            className={`${isSideNav ? 'w-54' : 'w-20'} transition-all duration-300 h-full hidden bg-white p-4 lg:block border-r border-gray-400`}
        >
            <p
                className={`text-md sm:text-2xl mb-1 font-semibold text-neutral-700
                    ${isSideNav
                        ? 'opacity-100 translate-x-0 w-auto'
                        : 'opacity-0 overflow-hidden w-0 pointer-events-none'
                    }`}
            >
                Voxly
            </p>
            <button
                onClick={() => setSideNav(!isSideNav)}
                className="absolute cursor-pointer z-50 -right-3 top-20 border border-gray-500 text-neutral-700 rounded-full p-1 bg-gray-200 shadow-md hover:scale-105"
            >
                {isSideNav ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
            <ul className="space-y-2 mt-20">
                {sideNav.map((sideNavItem, index) => {
                    const Icon = sideNavItem.icon;
                    return (
                        <li
                            onClick={() => navigate(sideNavItem.path)}
                            key={index}
                            className={`cursor-pointer ${location.pathname === sideNavItem.path ? 'bg-black/10' : ''} hover:bg-black/5 font-medium flex items-center p-2 rounded-md ${location.pathname === sideNavItem.path ? 'text-neutral-700' : 'group-hover:text-neutral-700 text-neutral-600'}`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="size-5" />
                                <p
                                    className={`transition-opacity duration-300 text-sm whitespace-nowrap
                                        ${isSideNav
                                            ? 'opacity-100'
                                            : 'opacity-0 w-0 overflow-hidden pointer-events-none'
                                        }`}
                                >
                                    {sideNavItem.title}
                                </p>
                            </div>
                        </li>)
                }
                )}
            </ul>
            <button className="flex items-center gap-3 p-2 cursor-pointer absolute bottom-10 hover:text-red-600 text-red-500">
                <span className='text-xl'>
                    <LuLogOut />
                </span>
                <span
                    className={`font-semibold transition-opacity duration-300 text-sm whitespace-nowrap ${isSideNav ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden pointer-events-none'}`}
                >
                    Logout
                </span>
            </button>
        </aside>
    )
}

export default Sidebar