//state updater using onclick

import React, { useState } from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <ClickCounter />
    </div>
  );
}

function ClickCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {setCount(count + 1);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Click Tracker</h2>
      <p className="text-lg text-gray-600 mb-6">
        {count === 0
          ? "You didnt clicked"
          : `You clicked button for ${count} time`}
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
      >
        Click Me
      </button>
    </div>
  );
}
v
