import React from 'react';

// import hero data
import { heroData } from '../data';

const Hero = () => {
  // destructure hero
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className='lg:h-[900px] py-8 bg-teal-100 xl:mt-0 mt-24' id="home" >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          {/* text */}
          <div className='text-center xl:text-left xl:absolute pt-0'>
            {/* title */}
            <h1
              className='h1 xl:max-w-[500px] mb-6 xl:mb-6'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h1>
            {/* subtitle */}
            <p
              className='lead xl:max-w-[500px] mb-6 lg:mb-6 text-2xl '
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </p>
            <a href="#about">
            <button
              className='btn btn-secondary mb-8 xl:mb-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {btnText}
            </button>
            </a>
          </div>
          {/* image */}
          <div
            className='xl:absolute xl:right-0 xl:top-12 xl:w-1/2  xl:h-1/2 xl:pt-16 '
            data-aos='fade-up'
            data-aos-delay='700'
          >
            <img src={image} alt='' className='xl:rounded-full'/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
