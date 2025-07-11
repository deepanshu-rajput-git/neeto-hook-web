import React from "react";
import { Button } from "@bigbinary/neetoui";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <Button
      icon={isDark ? SunIcon : MoonIcon}
      style='text'
      size='small'
      onClick={onToggle}
      className='text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    />
  );
};

export default DarkModeToggle;
