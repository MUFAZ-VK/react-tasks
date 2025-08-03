//click counter
import React, { useState } from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {setCount(currentCount => currentCount + 1);
                               };
  
  const handleDecrease = () => {
    setCount(currentCount => currentCount - 1);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-xs">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
      <p className="text-5xl font-bold text-indigo-600 mb-6">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDecrease}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          -
        </button>
        <button
          onClick={handleIncrease}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App
