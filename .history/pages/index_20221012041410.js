import React, { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

export default function Home() {
  const makeid = (length) => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [auth, setAuth] = useState([]);
  const [fields, setFields] = useState({
    number: '',
    email: '',
  });

  const updateFields = (e) => {
    e.persist();

    setFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('create-session', {
      id: makeid(7),
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
          type="tel"
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
