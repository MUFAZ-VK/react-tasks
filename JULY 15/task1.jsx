import React, { useState } from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <DisplayName />
    </div>
  );
}

function DisplayName() {
  const [name, setName] = useState("Guest");

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-gray-800">Hello, {name}</h1>
      <p className="text-gray-600 mt-2">This component displays a static value from its state.</p>
    </div>
  );
}

export default App
