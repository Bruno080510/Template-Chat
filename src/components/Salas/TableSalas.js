import React from 'react'

export const TableSalas = () => {
    const { nomeSalas } = props;
    const [isLocked, setIsLocked] = useState(false);
  return (
    <div className='py-2'>
            <div className='bg-gray-800 flex hover:bg-sky-600 hover:ring-sky-600 relative cursor-pointer items-center place-content-center w-72 rounded-2xl h-16 mx-auto'>
                <h1 className='text-lg text-white font-medium'>
                    
                </h1>
                <div className='flex items-end ps-2'>
                    <i style={{ fontSize: '20px', color: '#00FF7F' }}>{isLocked ? <AiFillLock /> : <AiFillUnlock />}</i>
                </div>
            </div>
        </div>
  )
}
