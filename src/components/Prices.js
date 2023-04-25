import React, { useEffect, useState } from 'react';

// import data
import { bundleData } from '../data';

// import components
import Bundles from './Bundles';

const Prices = () => {
  const [bundles, setBundles] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setBundles(bundleData[0].services);
  }, []);

  const getBundle = (name) => {
    const newBundles = bundleData.find((bundle) => {
      return bundle.name === name;
    });
    setBundles(newBundles.services);
  };

  return (
    <section className='py-12 lg:py-24 bg-teal-100 mb-32' id="pricing">
      <div className='container mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='h2 mb-3' data-aos='fade-down' data-aos-delay='100'>Full Groom package</h2>
          <p className='text-xl text-gray-500 font-semibold' data-aos='fade-down' data-aos-delay='200'>Choose the size of your dog 🦴</p>
        </div>
        {/* bundles */}
        <div className='grid grid-cols-3 gap-3 lg:gap-[30px]'>
          {bundleData.map((bundle, idx) => {
            // destructure bundle
            const { name, image, dogCategory } = bundle;
            return (
              <div
                onClick={() => {
                  {
                    getBundle(name);
                    setIndex(idx);
                  }
                }}
                key={idx}
                className='cursor-pointer text-center'
                data-aos='zoom-out'
                data-aos-offset='100'
                data-aos-delay='100'
              >
                <div className='xl:ml-20  mb-2 lg:mb-8 hover:scale-105 transition-all duration-300'>
                  <img className=" xl:w-72 xl:h-72 md:w-72 md:h-72 h-45 w-60 object-contain object-top bg-gradient-to-b  from-teal-500 to-teal-200 rounded-full pt-5 "src={image.type} alt='' />
                </div>
                <h3 className='lg:text-2xl capitalize font-semibold text-blue lg:mb-2'>
                  {name}
                </h3>
                <div
                  className={`${
                    index === idx
                      ? 'border-b-4 border-teal-400 transition-all after:lg:w-5 after:lg:h-5 after:lg:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative'
                      : 'border-b-4 border-transparent'
                  } pb-4 mb-12`}
                >
                  <div className='hidden lg:block capitalize'>
                    {dogCategory}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Bundles bundles={bundles} />
      </div>
    </section>
  );
};

export default Prices;
