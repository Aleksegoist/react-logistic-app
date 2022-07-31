import React from 'react';
import Background from '../assets/background_image.png';

const Header = () => {
  return (
    <div className='container relative'>
      <div className='absolute top-0 left-0'>
        <img src={Background} alt='background_image' />
      </div>

      <div className='absolute w-[440px] h-[254px] ml-[34px] mt-[101px]'>
        <h2 className='text-xs font-[500] text-white mb-4'>TRENDING PRODUCT</h2>
        <h1 className='text-[48px] font-bold leading-[130%] text-white mb-4'>
          Business Network for Logistics
        </h1>
        <p className='text-[12px] font-[400] text-white leading-[178%] mb-[20px] tracking-[0.5px]'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className='flex gap-4'>
          <div className='text-[10px] font-bold py-[13px] px-[9px] leading-[130%] text-[#FAFDFF] flex items-center rounded-[2px] backdrop-blur-[6px] bg-white/10 '>
            Product Commission: 12%
          </div>
          <div className='text-[10px] font-bold py-[13px] px-[9px] leading-[130%] text-[#FAFDFF] flex items-center rounded-[2px] backdrop-blur-[6px] bg-white/10'>
            Project Size Range: 500K USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
