import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Avida } from '../assets';

const Navbar: React.FC = () => {
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
          </div>
          <div className="flex items-center">
            <button className="bg-white text-Averde px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FaUser className="h-5 w-5 mr-2" />
              Mi Cuenta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
