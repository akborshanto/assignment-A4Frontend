import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* এখানে Sidebar বা অন্য কিছু রাখতে পারো */}
      <Outlet /> {/* এখানে child routes render হবে */}
    </div>
  );
};

export default DashboardLayout;
