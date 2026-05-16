import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const DashboardLayout = () => {
    return (
        <main className="flex min-h-screen">
            <div className="sticky top-0 left-0">
                <Sidebar />
            </div>
            <Outlet />
        </main>
    )
}

export default DashboardLayout