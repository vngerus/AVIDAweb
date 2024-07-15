import React from 'react';
import { hero } from '../assets/imgs';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={hero} alt="Biodiversidad" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start p-8 bg-black bg-opacity-50">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-md">
          Conoce la<br />
          biodiversidad<br />
          que te rodea
        </h1>
      </div>
    </div>
  );
};

export default Hero;
