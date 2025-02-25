import { Outlet } from "react-router-dom";
import ProtectedRoutes from "../../private/protector";
import '../../index.css'
import { Sidebar } from '../Sidebar';

const DashboardLayout = () => {
  return (
    <ProtectedRoutes>
      <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 " >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="lg:pl-60 w-full min-h-screen ">
          <Outlet />
        </div>
      </div>
    </ProtectedRoutes>
  );
};

export default DashboardLayout;
