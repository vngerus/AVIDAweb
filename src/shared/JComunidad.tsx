import React from 'react';
import { ComunidadData, CommunityMember } from '../data';

const JComunidad: React.FC = () => {
    return (
        <div className="py-12 px-4 bg-white">
            <h2 className="text-center text-3xl font-bold mb-8">Únete a la comunidad</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {ComunidadData.map((member: CommunityMember, index: number) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-sm">
                        <img src={member.fauna} alt={member.name} className="w-full h-80 object-cover rounded-md mb-4" />
                        <div className="flex items-center mb-4">
                            <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.location}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">{member.testimonial}</p>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center mt-8">
                <button className="bg-Averde text-white px-6 py-3 rounded-md hover:bg-green-700">
                    Comunidad
                </button>
            </div>
        </div>
    );
};

export default JComunidad;
