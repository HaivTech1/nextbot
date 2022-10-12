import React, { useState } from 'react';
import { io } from 'socket.io-client';
import uuid from 'uuid';

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

export default function Home() {
  const [auth, setAuth] = useState([]);
  const [fields, setFields] = useState({
    number: '',
    email: '',
  });

  const updateFields = (e) => {
    e.persist();

    setFields((prevState) => ({
      ...prevState,
      [e.target.number]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('create-session', {
      id: uuid['v4'](),
      userid: email,
      description: number,
    });
  };

  socket.on('init', function (data) {
    console.log(data);
    setAuth(data);
  });

  socket.on('message', function (data) {
    console.log(data);
  });

  socket.on('qr', function (data) {
    console.log(data);
  });

  socket.on('ready', function (data) {
    console.log(data);
    setAuth(data);
  });

  socket.on('authenticated', function (data) {
    console.log(data);
    setAuth(data);
  });

  socket.on('remove-session', function (id) {
    console.log(data);
  });

  return (
    <div>
      <div>
        <input
          type="text"
          name="number"
          value={fields.number}
          onChange={updateFields}
        />
        <input
          type="text"
          name="email"
          value={fields.email}
          onChange={updateFields}
        />
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
      <div>
        {auth.map((session, index) => (
          <div key={index}>
            <div>{session.id}</div>
            <div>{session.userid}</div>
            <div>{session.description}</div>
            <div>{session.ready}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
