import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

const HeaderBar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className='bg-white dark:bg-gray-900 shadow-sm flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700'>
      <Link
        to='/'
        className='flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200'
      >
        <Logo />
        <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
          NeetoWebhooks
        </h1>
      </Link>
      <DarkModeToggle
        isDark={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </header>
  );
};

export default HeaderBar;
