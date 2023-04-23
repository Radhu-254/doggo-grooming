import React, { useState } from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className='mb-12 lg:mb-0 z-20  px-4 lg:px-0  bg-teal-400 py-2 w-full fixed '
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='1000'
    >
      <div className='container mx-auto py-4'>
        <div className='flex items-center justify-between relative'>
          <div className='flex items-center gap-x-[120px]'>
            {/* logo */}
            <a href='#home'>
              <img src={Logo} alt='' />
            </a>

            {/* nav / initially hidden / show on large screens  */}
            <div className='hidden lg:flex'>
              <Nav />
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? 'max-h-72' : 'max-h-0'
            } lg:hidden absolute top-24 bg-teal-400 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
           <a href="#appointment">
            <button className='btn btn-quaternary hidden xl:flex items-center gap-x-[20px] group capitalize'>
              ✉️ Schedule Appointment
              <BsArrowRight className='text-2xl text-teal-600 group-hover:text-white transition opacity-50' />
            </button>
          </a>

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden'
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
