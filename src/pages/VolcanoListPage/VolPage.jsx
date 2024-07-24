import React, { useState } from 'react';
import VolcanoTable from '../../components/VolcanoTable/VolcanoTable';
import Header from '../../components/Header/Header';
import heroImage from '../../assets/hero.jpg';

const VolPage = () => {
    const [country, setCountry] = useState('');
    const [radius, setRadius] = useState('');

    return (
        <div className="min-h-screen h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <Header />
            <div className="pt-16 flex flex-col items-center justify-center w-full px-4 lg:px-8">
                <div className="mt-12 text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-lg w-full max-w-4xl" style={{ height: 'auto' }}>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Volcanoes</h1>
                    <VolcanoTable country={country} radius={radius} />
                </div>
            </div>
        </div>
    );
};

export default VolPage;
