import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-50">
      <h2 className="text-lg">Welcome back, April-ntt</h2>
      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;