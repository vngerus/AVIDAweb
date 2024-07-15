import React, { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Avida } from '../assets';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-Averde text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src={Avida}
                alt="Avida"
              />
            </div>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Mapa
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Comunidad
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Guía
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Tienda
              </a>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-white text-Averde px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FaUser className="h-5 w-5 mr-2" />
              Mi Cuenta
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full text-center">
            <a href="#" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </a>
            <a href="#" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Mapa
            </a>
            <a href="#" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Comunidad
            </a>
            <a href="#" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Guía
            </a>
            <a href="#" className="block text-white hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              Tienda
            </a>
            <button className="bg-white text-Averde px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center w-full hover:bg-gray-200">
              <FaUser className="h-5 w-5 mr-2" />
              Mi Cuenta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
