//welcome mesage using props of react
import React, { useState } from 'react';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <WelcomeCard name="john wick" />
    </div>
  );
}
function WelcomeCard({ name }) {
  const [isMorning, setIsMorning] = useState(true);
  const switchTime = () => {
    setIsMorning(!isMorning);
  };

  const greeting = isMorning ? `Good Morning, ${name}` : `Good Evening, ${name}`;
  const buttonText = isMorning ? "Switch to Evening" : "Switch to Morning";

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{greeting}</h2>
      <p className="text-gray-500 mb-6">This component combines props and state.</p>
      <button
        onClick={switchTime}
        className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default App

