import React from 'react';

// import cta data
import { ctaData } from '../data';

const CtaSection = () => {
  // destructure cta data
  const { title, subtitle1,subtitle2, subtitle3,subtitle4, subtitle5, location } = ctaData;
  return (
    <section className=' border-t-2' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center'>
          {/* text */}
          <div className='py-12 xl:py-24 text-center xl:text-left'>
            <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <p className='lead' data-aos='fade-up'>
              {subtitle1}
            </p>
            <p className='lead' data-aos='fade-up'>
              {subtitle2}
            </p>
          </div>
           {/* text */}
           <div className='py-12 xl:py-24 text-center xl:text-left'>
            <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>
              {location}
            </h2>
            <p className='lead' data-aos='fade-up'>
              {subtitle3}
            </p>
            <p className='lead' data-aos='fade-up'>
              {subtitle4}
            </p>
            <p className='lead' data-aos='fade-up'>
              {subtitle5}
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CtaSection;
