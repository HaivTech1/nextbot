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
    setList([...list, data]);
  });

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleClick}>Submit</button>

      <div class="client-container">
      <div class="client hide">
          <h3 class="text-center" id="description"></h3>
          <p class="description text-center" id="number"></p>
          <img src="./images/wa.png" width="200px"  height="200px" alt="Connecting..." id="qrcode">
          <div style="overflow-x: scroll;height:150px;">
              <h3><h3 class="title text-center" id="delete"></h3></h3>
              <ul class="logs"></ul>
          </div>
      </div>
  </div>
    </div>
  );
}
