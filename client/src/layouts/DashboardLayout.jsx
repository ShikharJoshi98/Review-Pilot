import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { sideNav } from "../constants/dashboard";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useState } from "react";

const DashboardLayout = () => {
    const location = useLocation();
    const [openSideNav, setOpenSideNav] = useState(false);
    const heading = sideNav.find((sideNavItem, index) => sideNavItem.path === location.pathname);

    return (
        <main className="md:flex block min-h-screen">
            {openSideNav &&
                (
                    <div className="fixed inset-0 transition-opacity duration-300 bg-black/20 bg-opacity-50 z-10"
                        onClick={() => setOpenSideNav(false)}>
                    </div>
                )}
            <aside className={`fixed top-0 left-0 h-screen w-60 bg-white text-neutral-700 shadow-lg z-10 p-4 transition-transform duration-300 ease-in-out ${openSideNav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between my-5">
                    <h1 className="text-2xl font-medium text-neutral-700">Voxly</h1>
                    <FaAngleDoubleLeft onClick={() => setOpenSideNav(false)} />
                </div>
                <ul className="list-none space-y-1">
                    {
                        sideNav.map((sideNavItem, index) => {
                            const Icon = sideNavItem.icon;
                            return (
                                <li
                                    key={index}
                                    onClick={() => { navigate(`${sideNavItem.path}`); setOpenSideNav(false); }}
                                    className={`${location.pathname === `${sideNavItem.path}` ? 'bg-black/10 font-semibold' : 'hover:bg-black/5'} flex items-center gap-2 cursor-pointer p-1 rounded-md`}>
                                    <Icon /> {sideNavItem.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
            <nav className="md:hidden flex items-center gap-5 p-5 border-b border-gray-400 text-2xl font-medium">
                <RiMenu2Fill onClick={() => setOpenSideNav(true)} className="size-5" />
                <p>
                    {
                        heading.title
                    }
                </p>
            </nav>
            <div className="min-h-screen hidden md:sticky md:block top-0 left-0">
                <Sidebar />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </main>
    )
}

export default DashboardLayout