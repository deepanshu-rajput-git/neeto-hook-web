import React from 'react';

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const toggle = () => setIsDarkMode(!isDarkMode);

  return (
    <button onClick={toggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
