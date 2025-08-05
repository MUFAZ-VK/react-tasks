import React, { useState } from 'react';

function GreetingForm() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };
  const handleSubmit = () => {
    if (name.trim() !== '') {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <h3>greeting form </h3>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
      {isSubmitted && <p>Hello, {name}!</p>}
    </div>
  );
}

export default GreetingForm;
