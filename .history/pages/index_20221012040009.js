import React, { useState } from 'react';
import { io } from 'socket.io-client';
import uuid from 'uuid';

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('test', { post: name });
  };

  socket.emit('create-session', {
    id: uuid['v4'](),
    userid: email,
    description: '',
  });

  socket.on('init', function (data) {
    console.log(data);
  });

  socket.on('message', function (data) {
    console.log(data);
  });

  socket.on('qr', function (data) {
    console.log(data);
  });

  socket.on('ready', function (data) {
    console.log(data);
  });

  socket.on('authenticated', function (data) {
    console.log(data);
  });

  socket.on('remove-session', function (id) {
    console.log(data);
  });

  return (
    <div>
      <div>
        <input type="text" value={fields.name} onChange={updateFields} />
        <input type="text" value={fields.email} onChange={updateFields} />
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
