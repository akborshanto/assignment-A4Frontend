import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
   {/* if you want  here  you can implement navbar and sidebar */}
      <Outlet /> 
    </div>
  );
};

export default DashboardLayout;
