import React from 'react';
import Background from '../assets/background_image.png';

const Header = () => {
  return (
    <div className='w-[343px] h-[230px] m-auto lg:w-[954px] lg:h-[456px] lg:m-auto'>
      <div className='absolute'>
        <img
          className='object-cover h-[230px] w-[343px] lg:container lg:w-[954px] lg:h-[456px] '
          src={Background}
          alt='/'
        />
      </div>

      <div className='sm:invisible lg:visible absolute lg:w-[440px] lg:h-[254px] lg:ml-[34px] lg:mt-[101px]'>
        <h2 className='sm:invisible lg:visible text-xs font-[500] text-white mb-4'>
          TRENDING PRODUCT
        </h2>
        <h1 className='sm:invisible lg:visible text-[48px] font-bold leading-[130%] text-white mb-4'>
          Business Network for Logistics
        </h1>
        <p className='sm:invisible lg:visible text-[12px] font-[400] text-white leading-[178%] mb-[20px] tracking-[0.5px]'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className='flex gap-4 justify-center relative top-[180px] lg:ml-[34px] lg:top-[360px] lg:flex lg:justify-start'>
        <div className='text-[10px] font-[400] py-[13px] px-[9px] leading-[130%] text-[#FAFDFF] flex items-center rounded-[2px] backdrop-blur-[6px] bg-white/10 '>
          Product Commission: 12%
        </div>
        <div className='text-[10px] font-[400] py-[13px] px-[9px] leading-[130%] text-[#FAFDFF] flex items-center rounded-[2px] backdrop-blur-[6px] bg-white/10'>
          Project Size Range: 500K USD
        </div>
      </div>
    </div>
  );
};

export default Header;
