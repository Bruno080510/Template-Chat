import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import { InfoUsuario } from '../Salas/InfoUsuario';

export const Login = () => {
  const [nick, setNick] = useState()
  const [salvarNick, setSalvarNick] = useState(null)
  const navigate = useNavigate();

 const navigateToLogin = () => {
  setSalvarNick(nick);
  if (nick != null) {
    navigate('/Chat', { state: { nick: nick } }); 
    console.log(nick);
  }
};

  function inputNick(e){
    setNick(e.target.value)
    
  }

  return (
    <div className=' flex items-center justify-center p-36 h-screen' style={{backgroundImage: `url(https://i.pinimg.com/564x/d7/dd/ff/d7ddff268d4af8aa5f4057ff768f6146.jpg)`}}>
      <div className='flex  opacity-90 flex-col items-center justify-center rounded-3xl bg-lime-950 w-96 h-96'>
        <h1 className=' text-white pb-3 text-center text-2xl font-bold'>Login</h1>
        <input onChange={inputNick} placeholder='Indique seu nome' className=' rounded p-3  w-80'></input>
        <div className='pt-3'>
        <button onClick={navigateToLogin} className=' w-24 h-10 rounded-xl bg-green-500'>Entrar</button>
        </div>
      </div>
    </div>
  )
}
