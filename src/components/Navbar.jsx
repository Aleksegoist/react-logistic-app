import React from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='border-b-[1px] border-[#F0F0F0]'>
      <div className='container h-[60px] flex justify-between'>
        <div className='ml-2 flex items-center'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='flex items-center gap-[15px] mr-[18px]'>
          <button className='rounded-[2px] border-solid border-[1px] border-[#F0F0F0] text-[10px] font-400 py-[8px] px-[20px]'>
            Log in
          </button>
          <button className='rounded-[2px] border-none text-[10px] font-400 py-[8px] px-[17px] bg-blue'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
