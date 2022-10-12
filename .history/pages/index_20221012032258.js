import React from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
export default function Home() {
  return <div>test</div>;
}
