import React, { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

export default function Home() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('test', { post: name });
  };

  socket.on('reply', (data) => {
    console.log(data);
    setList([...data]);
  });

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
