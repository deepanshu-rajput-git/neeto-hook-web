import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: HomeIcon, label: "Dashboard" },
    { path: "/transformations", icon: Cog6ToothIcon, label: "Transformations" },
  ];

  const getLinkClass = (path) => {
    const isActive =
      location.pathname === path ||
      (path === "/dashboard" && location.pathname.startsWith("/hooks")) ||
      (path !== "/dashboard" && location.pathname.startsWith(path));

    return isActive
      ? "bg-blue-100 text-black shadow-sm font-bold border border-blue-200"
      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-semibold";
  };

  return (
    <aside className='w-64 bg-white p-4 border-r border-gray-200 shadow-sm'>
      <nav className='space-y-2'>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${getLinkClass(
                item.path
              )}`}
            >
              <Icon className='h-5 w-5' />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
