import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { tienda } from "../assets";

const Tienda: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-start">
            <img src={tienda} alt="Visita nuestra tienda" className="absolute w-full h-full object-cover object-right-top md:object-right" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center p-16">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-md">
                    Visita nuestra <br />
                    tienda
                </h1>
                <button className="mt-6 bg-Averde text-white px-6 py-3 rounded-md flex items-center hover:bg-green-700">
                    Ver tienda
                    <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Tienda;
