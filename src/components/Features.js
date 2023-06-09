import React from 'react';

// import features data
import { featuresData } from '../data';

const Features = () => {
  // destructure features data
  const { title, subtitle, list } = featuresData;
  return (
    <section className='my-[70px] xl:my-[150px]' id="services">
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center'>
          <h2
            className='h2 mb-6 xl:mb-12'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {title}
          </h2>
          <p
            className='lead max-w-[584px] mx-auto mb-24 xl:mb-16 text-xl'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            {subtitle}
          </p>
        </div>
        {/* feature list */}
        <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
          {list.map((feature, index) => {
            // destructure feature
            const { image, bgImage, title, description, delay } =
              feature;
            // feature item
            return (
              <div
                key={index}
                className='w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
                data-aos='zoom-in'
                data-aos-offset='100'
                data-aos-delay={delay}
              >
                {/* bg image */}
                <div className=' xl:flex absolute top-0 right-0 -z-10'>
                  <img src={bgImage} alt="bg" />
                </div>

                {/* icon image */}
                <div
                  className='max-w-[120px] xl:mr-7 xl:max-w-[232px] h-full'
                  data-aos='zoom-in-right'
                  data-aos-delay={delay}
                >
                  <img src={image} className='xl:rounded-full' alt="bg" />
                </div>
                {/* text */}
                <div className='max-w-[220px]'>
                  <h3 className='h3 mb-4 uppercase font-bold mt-4'>{title}</h3>
                  <p className='italic mb-4'>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
