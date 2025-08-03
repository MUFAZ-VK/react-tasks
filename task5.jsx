// show and hide user bio
import React, { useState } from 'react';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans p-4">
      <UserBio />
    </div>
  );
}

function UserBio() {
  const [showBio, setShowBio] = useState(false);
  const handleToggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl text-center w-full max-w-lg">
      <img src="#" alt="User" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"/>
      <h2 className="text-2xl font-bold text-gray-800">john wick</h2>
      <button onClick={handleToggleBio}
        className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 transition-all">
        {showBio ? 'Hide' : 'Show'}
      </button>

    
      {showBio && (
        <div className="text-left mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700">
           john wick is a demo person that i used in the show and hide bio app
          </p>
        </div>
      )}
    </div>
  );
}

export default App
