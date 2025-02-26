import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Bell,
  User,
  ListOrdered,
  User2Icon,
  ListOrderedIcon,
} from "lucide-react";
import { useAppSelector } from "../redux/app/hook";
import { logout, selectCurrentUser } from "../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export function Sidebar() {
  const user = useAppSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const menuItems = [];

  if (user?.role === "admin") {
    menuItems.push(
      { icon: ShoppingCart, label: "Order Management", path: "/dashboard/orderManagement" },
      { icon: BarChart3, label: "Product Management", path: "/dashboard/bicycle-controller" },
      { icon: Users, label: "User Management", path: "/dashboard/UserManagement" },
      { icon: ListOrdered, label: "All Transactions", path: "/dashboard/transactions" },
      { icon: User, label: " Profile", path: "/dashboard/admin-profile" }
    );
  } else if (user?.role === "customer") {
    menuItems.push(

      { icon: User2Icon, label: "Profile", path: "/dashboard/user-profile" },
      { icon: ListOrdered, label: "Your Order", path: "/dashboard/UserOrderDetail" },
  
    );
  }

  // Logout Function
  const handleLogout = () => {
    try {
      dispatch(logout());
      toast.success("Logout Successful");
    } catch (error) {
      toast.error("Already logged out");
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white/10 backdrop-blur-lg border-r border-white/20 transition-all duration-300 z-40 text-white
          ${isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20 lg:hover:w-64"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <LayoutDashboard className="w-6 h-6 text-purple-300" />
              </div>
              <span
                className={`text-white font-bold text-xl whitespace-nowrap transition-all duration-300 
                ${!isOpen && "opacity-0 lg:opacity-0"}`}
              >
                Glass Admin
              </span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-purple-700 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <item.icon className="w-6 h-6" />
                    <span className={`whitespace-nowrap transition-all duration-700 ${!isOpen && "opacity-0"}`}>
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-white/20">
            <div className="flex items-center gap-3 p-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1">
                  <Bell className="w-4 h-4 text-green-400 " />
                </div>
              </div>
              <div className={`transition-all duration-300 ${!isOpen && "lg:opacity-0"}`}>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
