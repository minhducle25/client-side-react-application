import React from 'react';
import Header from '../../components/Header/Header';
import heroImage from '../../assets/hero.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <Header />
      <div className="pt-16 flex flex-col items-center justify-center h-full">
        <div className="mt-12 text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">Welcome to Volcanoes Explorer.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;