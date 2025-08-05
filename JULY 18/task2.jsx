import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "mufaz", age: 24 },
    { id: 2, name: "john", age: 28 },
    { id: 3, name: "unknown", age: 22 }
  ]);

  return (
    <div>
      <h3>User List</h3>
      {users.map(user => (
        <p key={user.id}>
          Name: {user.name}, Age: {user.age}
        </p>
      ))}
    </div>
  );
}

export default UserList;
