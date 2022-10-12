import React, { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Home() {
  const [name, setName] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('test', name);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
