import React from 'react';
function GreetingCard({ name, isBirthday = false }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      {isBirthday 
        ? <h3>Happy Birthday {name}! 🎉</h3>
        : <p>Hello {name}!</p>
      }
    </div>
  );
}

function GreetingCardContainer() {
  return (
    <div>
      <h3>Greeting Cards (using props in react)</h3>
      <GreetingCard name="Aditi" isBirthday={true} />
      <GreetingCard name="Ben" isBirthday={false} />
      <GreetingCard name="Chris" />
    </div>
  );
}

export default GreetingCardContainer;
