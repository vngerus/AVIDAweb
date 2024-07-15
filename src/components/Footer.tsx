import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Avida } from '../assets';

const Footer: React.FC = () => {
    return (
        <footer className="bg-Averde text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center mb-4 md:mb-0 md:items-start">
                    <img src={Avida} alt="Ávida" className="h-12" />
                    <p className="mt-2 text-center md:text-left">Se parte del cambio</p>
                </div>
                <div className="flex flex-col md:flex-row justify-around w-full md:w-auto mb-4 md:mb-0">
                    <div className="mb-4 md:mb-0 md:mr-8">
                        <h4 className="font-bold mb-2 text-center md:text-left">Inicio</h4>
                        <ul className="text-center md:text-left">
                            <li><a href="#" className="hover:underline">Inicio</a></li>
                            <li><a href="#" className="hover:underline">Mapa</a></li>
                            <li><a href="#" className="hover:underline">Comunidad</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2 text-center md:text-left">Guía</h4>
                        <ul className="text-center md:text-left">
                            <li><a href="#" className="hover:underline">Guía</a></li>
                            <li><a href="#" className="hover:underline">Tienda</a></li>
                            <li><a href="#" className="hover:underline">Mi cuenta</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
