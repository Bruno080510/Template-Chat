import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';



export const InfoUsuario = (props) => {
  const location = useLocation(); 
  const nick = location?.state?.nick;
  return (
    <div>
      <div className='flex flex-row py-5 px-auto  place-content-center'>
          <i className='px-3   place-content-end cursor-pointer' style={{ fontSize: '50px', color: 'white' }}><FaUserCircle /></i>
          <h1 className='text-2xl  text-white flex items-center'>{nick}</h1>
      </div>
    </div>
  )
}
