import React, { useState } from 'react';
import { AiFillLock, AiFillUnlock, AiOutlineSend } from 'react-icons/ai';
import ChatSalas from '../Salas/ChatSalas';


const Chat = (props) => {
  const { nomeSalas } = props;
  const [isLocked, setIsLocked] = useState(false);


  return (
    <div className='w-80 flex-auto flex bg-gray-800'>
      <div className='w-full fixed flex items-center flex-auto h-20 bg-gray-800'>
        <NomeSalas nomeSalas={"SaladasGirls"} />
        <i style={{ fontSize: '30px', color: '#00FF7F' }}>
          {isLocked ? <AiFillLock /> : <AiFillUnlock />}
        </i>
      </div>
      <div className='w-full p-5 fixed mt-20 h-[31.5em] opacity-60' style={{backgroundImage: `url(https://i.pinimg.com/564x/b1/82/22/b182226ad3f8b57deb116b17b3a705e7.jpg)`}}>
          <div  className='  w-80 object-fill rounded-3xl p-5 bg-white'>
          <h1>is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been theis simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the  </h1>
          </div>
      </div>
      <form className='bottom-0 z-10 h-auto left-0 flex items-end p-3'>
        <input placeholder='Digite uma mensagem' className=' p-5 w-[45em] font-bold rounded-xl h-8'/>
        <i className=' pb-0.5 ps-4 cursor-pointer' style={{ fontSize: '35px', color: '#00FF7F' }}>
          <AiOutlineSend/>
        </i>
      </form>
    </div>
  );
};

const NomeSalas = (props) => {
  const { nomeSalas } = props;

  return (
    <div className='ps-10 pe-3 text-white font-semibold text-2xl'>
      <h1>{nomeSalas}</h1>
    </div>
  );
};

export default Chat;
