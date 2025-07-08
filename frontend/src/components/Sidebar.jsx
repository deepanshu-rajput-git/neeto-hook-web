import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseLinkClass =
    "flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium";
  const activeLinkClass = "bg-green-600 text-white";
  const inactiveLinkClass =
    "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <aside className='w-64 bg-gray-50 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700'>
      <nav className='space-y-2'>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to='/transformations'
          className={({ isActive }) =>
            `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
          }
        >
          <span>⚙️</span>
          <span>Transformations</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
