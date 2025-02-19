import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LayoutDashboard, Users, ShoppingCart, Settings, BarChart3, Bell, User } from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin", active: false },
    { icon: Users, label: "Users", path: "/admin/users", active: false },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders", active: false },
    { icon: BarChart3, label: "Add Bicycle", path: "/dashboard/bicycle-controller", active: false },
  /*   { icon: Settings, label: "Settings", path: "/admin/settings", active: false },
    { icon: User, label: "", path: "", active: false }, */
  ];

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
        className={`fixed top-0 left-0 h-full bg-white/10 backdrop-blur-lg border-r border-white/20 transition-all duration-300 z-40 
          ${isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20 lg:hover:w-64"} `}
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
                ${!isOpen && "lg:opacity-0"}`}
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
                        isActive ? "bg-white/20 text-white" : "text-white/70 hover:bg-white/10 hover:text-white "
                      }`
                    }
                  >
                    <item.icon className="w-6 h-6" />
                    <span
  className={`whitespace-nowrap transition-all duration-700 
  ${!isOpen && "lg:opacity-0"}`}
>
  {item.label}
</span>

                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-white/20">
            <div className="flex items-center gap-3 p-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1">
                  <Bell className="w-4 h-4 text-purple-300" />
                </div>
              </div>
              <div className={`transition-all duration-300 ${!isOpen && "lg:opacity-0"}`}>
                <div className="text-white font-medium">John Doe</div>
                <div className="text-white/70 text-sm">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
