import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

const HeaderBar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <Link to="/" className="flex items-center space-x-3">
        <Logo />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">NeetoWebhooks</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </header>
  );
};

export default HeaderBar;
