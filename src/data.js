

// import images
import AboutImg from '../src/assets/img/about.webp';
import Service1Img from '../src/assets/img/features/service1.jpg';
import Service2Img from '../src/assets/img/features/service2.jpg';
import Service3Img from '../src/assets/img/features/service3.webp';
import Service4Img from '../src/assets/img/features/service4.jpg';
import Service5Img from '../src/assets/img/features/service5.jpg';
import Service6Img from '../src/assets/img/features/service6.webp';
import Avatar1Img from '../src/assets/img/testimonials/test1.png';
import Avatar2Img from '../src/assets/img/testimonials/test2.png';
import Avatar3Img from '../src/assets/img/testimonials/test3.png';
import HeroImage from '../src/assets/img/hero.jpg';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import DogCateg1 from './assets/img/dogs/dog-slide-3.png';
import DogCateg2 from './assets/img/dogs/dog-slide-1.png';
import DogCateg3 from './assets/img/dogs/dog-slide-2.png';

export const navigationData = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  }
];

export const heroData = {
  title: ` Welcome to DogGo 🐶 Grooming`,
  subtitle:
    'Give your Pet some LOVE and CARE 💓',
  btnText: 'LEARN MORE',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'About the Salon',
  subtitle:
    'First and foremost, the experience at DogGo grooming is unlike the traditional boarding or grooming services at a Veterinarian Facility. We take pride in the care and treatment of our “patients” because, like you, we love dogs and treat them like family while they are here.',
};

export const featuresData = {
  title: 'Dog Grooming Services',
  subtitle:
    'We only use natural, cruelty free products that are all hypoallergenic and we are highly trained and experienced with all breeds.',
  list: [
    {
      image: Service1Img,
      bgImage: Feature1BgImg,
      title: 'Full Groom',
      description:
        'A nose-to-tail treatment which will leave your dog looking clean and smelling fresh.We start with a bath using only natural shampoos  followed by a dry and brush out to remove any dead skin, minor tangles or matted hair. Next we give your dog a fresh haircut and we finish the full groom with lots of cuddles and a scented mist.',
      delay: '100',
    },
    {
      image: Service2Img,
      bgImage: Feature1BgImg,
      title: 'Puppy Pamper',
      description:
        "A gentle introduction to the grooming experience in a calm and fun way.Our puppy groom Includes a bath with natural shampoo, ear cleaning, nail and pad trim and a facial tidy, and lot's of Upper Hound love and cuddles",
      delay: '300',
    },
    {
      image: Service3Img,
      bgImage: Feature1BgImg,
      title: 'Bath & Brush',
      description:
        'Keep you four-legged friend looking fresh and tidy between haircuts. Recommended for short-haired dogs too, our Bath & Brush, includes a bath , ear cleansing, a fluff dry, followed by a full body brush, nail and pad trim. Finished with a scented mist.',
      delay: '500',
    },
    {
      image: Service4Img,
      bgImage: Feature1BgImg,
      title: 'Pawdicure',
      description:
        'A nail trim not only makes your dog look better, cleaning and clearing the pads of excess hair will help the dog grip the floor properly, and prevent grass or plant seeds from sticking in and taking root under the skin.',
      delay: '700',
    },
    {
      image: Service5Img,
      bgImage: Feature1BgImg,
      title: 'Teeth Cleaning',
      description:
        'More effective than ordinary brushing and removes the need for anaesthesia, Ultrasonic Teeth Cleaning for dogs is a gentle and stress-free process that will improve their oral health.',
      delay: '900',
    },
    {
      image: Service6Img,
      bgImage: Feature1BgImg,
      title: 'De-Shed treatment',
      description:
        'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.',
      delay: '1000',
    },
  ],
};

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: 'small',
    dogCategory: '1 - 15 kg',
    services: [
      {
        name: 'smart',
        price: 20,
        list: ['Bath & Brush', 'Pawdicure','Teeth Cleaning'],
      },
      {
        name: 'premium',
        price: 40,
        list: [
          'all smart services',
          'De-shed treatment',
        ],
      },
      {
        name: 'royal',
        price: 60,
        list: [
          'all premium services',
          'Ozone-Spa treatment',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <DogCateg2 />,
    dogCategory: '16 - 30 kg',
    services: [
      {
        name: 'smart',
        price: 40,
        list: ['Bath & Brush', 'Pawdicure','Teeth Cleaning'],
      },
      {
        name: 'premium',
        price: 60,
        list: [
          'all smart services',
          'De-shed treatment',
        ],
      },
      {
        name: 'royal',
        price: 80,
        list: [
          'all premium services',
          'Ozone-Spa treatment',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'large',
    image: <DogCateg3 />,
    dogCategory: '31 - 45 kg',
    services: [
      {
        name: 'smart',
        price: 60,
        list: ['Bath & Brush', 'Pawdicure','Teeth Cleaning'],
      },
      {
        name: 'premium',
        price: 80,
        list: [
          'all smart services',
          'De-shed treatment',
        ],
      },
      {
        name: 'royal',
        price: 100,
        list: [
          'all premium services',
          'Ozone-Spa treatment',
        ],
      },
    ],
  },
];


export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Ross Geller',
    breed: "Dog's Breed: Bulldog",
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Joey Tribbiani',
    breed: "Dog's Breed: Beagle",
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Monica Geller',
    breed: "Dog's Breed: Poodle",
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us',
  subtitle1: ' 👩‍🏭Working Hours: Mon-Sat : 7am to 7pm',
  subtitle2: '📞9925731479   ✉️doggogrooming@gmail.com',
  location: 'Address',
  subtitle3: ' A-Signature Avenue,',
  subtitle4: ' Girton Herts Ave Street,',
  subtitle5: ' PRBWEN8 8UE',
};

