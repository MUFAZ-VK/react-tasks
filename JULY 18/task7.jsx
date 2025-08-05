import React, { useState } from 'react';

function DynamicColorBox() {
  const [isBlue, setIsBlue] = useState(true);

  const boxStyle = {
    width: '150px',
    height: '150px',
    backgroundColor: isBlue ? 'skyblue' : 'lightgreen',
    border: '2px solid black',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: 'black',
    transition: 'background-color 0.5s ease',
  };

  return (
    <div>
      <h3> Dynamic Color Box</h3>
      <button onClick={() => setIsBlue(!isBlue)}>Change Color</button>
      
      <div style={boxStyle}>
        {isBlue ? 'Blue' : 'Green'}
      </div>
    </div>
  );
}

export default DynamicColorBox;
