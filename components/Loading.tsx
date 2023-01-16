import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-gray-500">
        <div className="spinner border-4 border-t-4 text-gray-500 h-12 w-12"></div>
        <p className="text-lg font-medium mt-3">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
