import React, { Component } from 'react'
import ChatSalas from './components/Salas/ChatSalas';
import Chat from './components/Chat/Chat';

function App(){
  return(
    <div class=' flex flex-row h-screen '>
    <ChatSalas/>
    <Chat/>
  </div>
  )
}


export default App;