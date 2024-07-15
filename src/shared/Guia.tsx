import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { guia } from "../assets";

const Guia: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-start">
            <img src={guia} alt="Guía de exploración" className="absolute w-full h-full object-cover object-right" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center p-16 space-y-6">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold max-w-md">
                    Conoce <br />
                    nuestra guía <br />
                    de exploración
                </h1>
                <button className="bg-Averde text-white px-6 py-3 rounded-md flex items-center hover:bg-green-700">
                    Ver guía
                    <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Guia;
