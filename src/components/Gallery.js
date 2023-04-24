import { useState } from 'react';


import GalleryImg1 from '../assets/img/gallery/1.webp'
import GalleryImg2 from '../assets/img/gallery/2.jpg';
import GalleryImg3 from '../assets/img/gallery/3.jpg';
import GalleryImg4 from '../assets/img/gallery/4.jpg';
import GalleryImg5 from '../assets/img/gallery/5.jpg';
import GalleryImg6 from '../assets/img/gallery/6.webp';



const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const images = [
    { src: GalleryImg1, alt: 'Image 1', desc: 'Brett (Doberman) ', desc1:'Bath & Brush',delay:'100' },
    { src: GalleryImg2, alt: 'Image 2', desc: 'Donny (Finnish spitz)', desc1:'Pawdicure + De-Shed Treatment',delay:'300'},
    { src: GalleryImg3, alt: 'Image 3', desc: 'Flyer (Labrador Retriever)', desc1:'Puppy Pamper',delay:'500' },
    { src: GalleryImg4, alt: 'Image 4', desc: 'Titan (Toy Poodle)', desc1:'Puppy Pamper + Teeth Cleaning',delay:'700'},
    { src: GalleryImg5, alt: 'Image 5', desc: "Scout (Bull Dog)", desc1:'Full Groom',delay:'900' },
    { src: GalleryImg6, alt: 'Image 6', desc: 'Heaven (Labrador Retriever)', desc1:'Puppy Pamper',delay:'1100'},

  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section className='bg-teal-200 pb-10' id="gallery">
      <div className='text-center'>
          <h2
            className='h2 mb-6 pt-12'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            Gallery
          </h2>
          <p
            className='lead max-w-[584px] mx-auto mb-24 xl:mb-16 text-xl'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            Just a few of our happy clients 🐕
          </p>
        </div>
    <div className="flex flex-wrap justify-center ">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-60 h-60 md:w-50 md:h-50 lg:w-80 lg:h-80 overflow-hidden m-4 rounded-lg"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          data-aos='zoom-in'
          data-aos-offset='100'
          data-aos-delay={image.delay}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full transition-all duration-300 ${
              hoveredIndex === index ? 'scale-110' : ''
            }`}
          />
          {hoveredIndex === index && (
            <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 w-full">
              <b><p>{image.desc}</p></b>
              <p>{image.desc1}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};

export default Gallery;
