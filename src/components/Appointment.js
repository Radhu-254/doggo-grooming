import React from 'react';

const Appointment = () => {
  return (
    <section className='bg-teal-100 py-12 lg:pb-12 mt-32 relative min-h-[584px]  ' id="appointment">
      <div className='container mx-auto mt-12'>
        <div className='lg:absolute lg:-top-32 lg:left-0 lg:right-0'>
          {/* form */}
          <form className='bg-teal-200 w-full max-w-[790px] h-[500px] mx-auto lg:mt-20 rounded-[60px] py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'
                 action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 " method="POST">
            <h2 className='h2 my-4'>Schedule The Appointment</h2>
            <input
              className='input-control'
              type='text'
              placeholder='Name'
              name="name"
              autoComplete='off'
            />
            <input
              className='input-control'
              type='email'
              placeholder='Email'
              name="email"
              autoComplete='off'
            />
            <input
              className='input-control'
              type='text'
              placeholder='Phone no.'
              name="ph-no"
              autoComplete='off'
            />
             <input
              className='input-control'
              type='text'
              placeholder="Dog's Breed "
              name="breed"
              autoComplete='off'
            />
            <input
              className='input-control'
              type='text'
              placeholder='Treatment'
              name="treatment"
              autoComplete='off'
            />
            <button className='bg-teal-400 hover:bg-teal-700 text-white rounded-full h-20 w-1/3 font-bold uppercase  '>Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;