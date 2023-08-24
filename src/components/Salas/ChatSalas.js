import React, { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { InfoUsuario } from './InfoUsuario';

const ChatSalas = () => {

    const [adicionar, setAdicionar] = useState(false)
    const [nomeSala, setNomeSala] = useState()
    const [list, setList] = useState([])
    const [value, setValue] = useState(true)
    
    function handleSaveLista(nomeSala) {
        setList((prevList) => [...prevList, nomeSala]);
      }

      function mudarValue (){
        setValue(true)
      }
    

    function nomeSalaNova(e) {
        setNomeSala(e.target.value)
    }

    function handleSaveSalas() {
        if (nomeSala) {
          handleSaveLista(nomeSala);
          setNomeSala('');
          setAdicionar(false)
        }
      }

    return (
        <div className='w-96 border-r-grey  bg-gray-900 '>
            <InfoUsuario  />
            <div className='py-4'>
                <form action='' className=' w-max mx-auto rounded-full flex items-center bg-white'>
                    <input
                        type='text'
                        placeholder='Pesquise salas'
                        className=' w-64 rounded-full ps-2 h-8 py-5 outline-none'
                    />
                    <i className='px-1  place-content-center cursor-pointer' style={{ fontSize: '20px' }}><GrSearch /></i>
                </form>
            </div>
            {list.map((sala, index) => (
        <Salas key={index} nomeSala={sala} />
      ))}
            <div className='text-center pt-2'>
                <button style={{ backgroundColor: '#00FF7F' }} className=' w-72  font-semibold text-lg p-4  rounded-3xl' onClick={() => setAdicionar(true)}>Adicionar salas</button>
            </div>

            {adicionar ?
                //separar em outro arquivo
                <div className='fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='flex flex-col p-12 bg-zinc-100 rounded-lg'>
                        <h2 className=' text-center pb-3 text-2xl'>Adicionar Salas</h2>
                        <form className='flex-row flex'>
                            <div className='pb-5 inset-x-0 top-0 flex  justify-center'>
                                <input className='p-3 border-2 border-black  rounded' onChange={nomeSalaNova} placeholder='Nome da sala'></input>
                                {
                                  value ? <div className='ps-2'>
                                    <input type='password' className='p-3 border-2 border-black  rounded'  placeholder='senha'></input>
                                  </div>
                                  : null

                                }
                            </div>
                            <div className='pb-5 ps-3 flex justify-center '>
                                <select name='opcao ' className='p-3 w-28 border-2 border-black'>
                                    <option value='aberto'>aberto</option>
                                    <option onClick={mudarValue} value='fechado'>fechado</option>
                                </select>
                            </div>
                        </form>
                        <div className='flex flex-col items-center'>
                            <div className='p-3' >
                                <button onClick={handleSaveSalas} className=' h-12 text-white font-bold w-40 bg-green-600 rounded' >Salvar</button>
                            </div>
                            <div className='p-3'>
                                <button className=' h-12 text-white font-bold w-40 bg-red-600 rounded' onClick={() => setAdicionar(false)}>fechar</button>
                            </div>
                        </div>
                    </div>
                </div> :
                null}
        </div>
    );
};

const Salas = ({ nomeSala }) => {
    const [isLocked, setIsLocked] = useState(false);
  
    return (
      <div className='py-2'>
        <div className='bg-gray-800 flex hover:bg-sky-600 hover:ring-sky-600 relative cursor-pointer items-center place-content-center w-72 rounded-2xl h-16 mx-auto'>
          <h1 className='text-lg text-white font-medium'>{nomeSala}</h1>
          <div className='flex items-end ps-2'>
            <i style={{ fontSize: '20px', color: '#00FF7F' }}>
              {isLocked ? <AiFillLock /> : <AiFillUnlock />}
            </i>
          </div>
        </div>
      </div>
    );
  };

export default ChatSalas;
