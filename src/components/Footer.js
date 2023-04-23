import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-teal-400 py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row justify-between items-center text-white'>
          <a href='#home'>
            <img src={Logo} alt='' />
          </a>
          <div className='text-[15px]'>
            &copy;  2023. Odan infotech LLC.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;