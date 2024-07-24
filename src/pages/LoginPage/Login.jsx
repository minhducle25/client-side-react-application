import React from 'react';
import SignIn from '../../components/Modal/SignIn/SignIn';
import Header from '../../components/Header/Header';
import heroImage from '../../assets/hero.jpg';

const Login = () => {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <Header />
      <div className="pt-16 flex flex-col items-center justify-center h-full">
        <div className="mt-12 text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
          <h1 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">Sign In to Volcanoes Explorer</h1>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
