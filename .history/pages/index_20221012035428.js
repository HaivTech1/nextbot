import React, { useState } from 'react';
import { io } from 'socket.io-client';
import uuid from 'uuid';
const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('test', { post: name });
  };

  socket.emit('create-session', {
    id: uuid['v4'](),
    userid: email,
    description: clientDescription,
  });

  socket.on('reply', (data) => {
    setList([...list, data]);
  });

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <button onClick={handleClick}>Submit</button>
      </div>

      <div>
        <img
          src="./images/wa.png"
          width="200px"
          height="200px"
          alt="Connecting..."
          id="qrcode"
        />
      </div>
    </div>
  );
}
