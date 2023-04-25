import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Prices from './components/Prices';
import Appointment from './components/Appointment';
import Gallery from './components/Gallery';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <About />
      <Features />
      <Gallery/>
      <Prices/>
      <Testimonials/>
      <Appointment/>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
