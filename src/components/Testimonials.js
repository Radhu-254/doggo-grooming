import React from 'react';

// import components
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='relative' id="testimonials">
      <div className='container mx-auto'>
        <div
          className='bg-teal-200 min-h-[800px] rounded-[50px]'
          data-aos='fade-up'
          data-aos-offset='300'
        >
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
            <h2 className='h2 text-center mb-[80px]'>
             Testimonials
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
