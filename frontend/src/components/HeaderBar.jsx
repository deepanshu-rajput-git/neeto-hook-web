import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@bigbinary/neetoui";
import Logo from "./Logo";

const HeaderBar = () => {
  return (
    <header className='bg-white shadow-sm flex justify-between items-center p-4 border-b border-gray-200'>
      <Link
        to='/'
        className='flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200'
      >
        <Logo />
        <Typography style='h2' className='text-gray-900'>
          NeetoWebhooks
        </Typography>
      </Link>
    </header>
  );
};

export default HeaderBar;
