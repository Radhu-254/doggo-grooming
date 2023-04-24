import React from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const Bundle = ({ bundles }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[30px]'>
      {bundles.map((bundle, index) => {
        // destructure bundle
        const { name, price, list } = bundle;
        return (
          <div
            className='w-full lg:max-w-1/3 bg-white shadow-primary text-center h-[300px] rounded-[30px] py-6 px-8 '
            key={index}
          >
            <div className='xl:text-3xl text-2xl font-bold text-black xl:mb-4 mb-2'>${price}</div>
            <div className='capitalize xl:mb-12 mb-6 text-blue font-medium'>{name}</div>
            <div className='flex flex-col gap-y-4 max-w-[230px] mx-auto'>
              {list.map((item, index) => {
                return (
                  <div className='flex items-center gap-x-3 ' key={index}>
                    <BsCheckCircleFill className='text-teal-500 text-xl' />
                    <div className='capitalize'>{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bundle;
