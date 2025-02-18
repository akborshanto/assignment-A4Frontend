import { Outlet } from "react-router-dom";
import ProtectedRoutes from "../../private/protector";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
   {/* if you want  here  you can implement navbar and sidebar */}
   <ProtectedRoutes>
   <Outlet /> 
   </ProtectedRoutes>
    
    </div>
  );
};

export default DashboardLayout;
