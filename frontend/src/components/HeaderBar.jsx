import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@bigbinary/neetoui";
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
        <Typography style='h2' className='text-gray-900 dark:text-gray-100'>
          NeetoWebhooks
        </Typography>
      </Link>
      <DarkModeToggle
        isDark={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </header>
  );
};

export default HeaderBar;
