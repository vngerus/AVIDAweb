import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { phone } from '../assets';
import { Conecta } from '../data';

const Comunidad: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-white">
            {Conecta.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
                        <div className="md:w-1/2 md:pr-8">
                            <h1 className="text-3xl font-bold text-Averde mb-4">
                                {item.title}
                            </h1>
                            <p className="text-gray-700 mb-4">
                                {item.des}
                            </p>
                            <p className="text-gray-700 mb-4">
                                {item.des2}
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
                            <img src={phone} alt="Aplicación móvil" className="max-w-xs md:max-w-sm relative z-10" />
                        </div>
                    </div>
                </React.Fragment>
            ))}
            <div className="w-full flex justify-center mt-8">
                <button className="bg-Averde text-white px-6 py-3 rounded-md flex items-center hover:bg-green-700">
                    <FaDownload className="mr-2" />
                    Descargar
                </button>
            </div>
        </div>
    );
};

export default Comunidad;
