import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { RutasData } from '../data';
import { bici, grupo, grupo2, maparuta } from "../assets";

const CyC: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-white">
            {RutasData.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mb-8">
                        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                            <img src={maparuta} alt="Mapa" className="w-3/4 h-auto rounded-md mx-auto" />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <h1 className="text-3xl font-bold text-Averde mb-4">{item.title}</h1>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-between w-full max-w-7xl">
                        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                            <img src={bici} alt="Ruta 1" className="w-3/4 h-auto rounded-md mx-auto" />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                            <img src={grupo} alt="Ruta 2" className="w-3/4 h-auto rounded-md mx-auto" />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                            <img src={grupo2} alt="Ruta 3" className="w-3/4 h-auto rounded-md mx-auto" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-8">
                        <button className="bg-Averde text-white px-6 py-3 rounded-md flex items-center hover:bg-green-700">
                            <FaMapMarkedAlt className="mr-2" />
                            Ver rutas
                        </button>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CyC;
