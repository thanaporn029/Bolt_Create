import React from 'react';
import { Eye, MessageCircle, Heart, Bell } from 'lucide-react';

const Stats = () => {
  return (
    <div className="bg-black rounded-xl p-6 mb-8">
      <h2 className="text-white text-xl font-semibold mb-6 text-center">Updated Stats</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-3 rounded-full mb-2">
            <Eye className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-gray-400 text-sm">Visitors</span>
          <span className="text-white font-semibold">-</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-3 rounded-full mb-2">
            <MessageCircle className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-gray-400 text-sm">Comments</span>
          <span className="text-white font-semibold">-</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-3 rounded-full mb-2">
            <Heart className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-gray-400 text-sm">Support</span>
          <span className="text-white font-semibold">-</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-3 rounded-full mb-2">
            <Bell className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-gray-400 text-sm">Followers</span>
          <span className="text-white font-semibold">-</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;