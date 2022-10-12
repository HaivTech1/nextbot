import React, { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Home() {
  const [name, setname] = useState();
  return <div>test</div>;
}
