import React from 'react'
import fontContext from '../context/Font.context'
import { useContext } from 'react'
const Navbar = () => {
  const {fontSize,setFontSize} = useContext(fontContext); 
  return (
    <div className='flex items-center justify-between border-b border-[#25313b]/15 bg-[#fffdf9]/80 px-4 py-4 shadow-[0_10px_30px_rgba(37,49,59,0.06)] backdrop-blur-md sm:px-10'>
      <h1 className='text-xl font-bold tracking-wide text-[#25313b] sm:text-2xl'>Font-Regulator</h1>
      <div className='flex justify-center gap-2'>
      <button className='min-w-16 cursor-pointer rounded-full bg-[#317d6f] px-3 py-2 text-xs font-bold uppercase tracking-widest text-white transition duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:min-w-18' onClick={()=>{
          setFontSize((prev)=>prev+1)
          console.log(fontSize)
        }}>Font+</button>
        <button className='min-w-16 cursor-pointer rounded-full bg-[#bd6654] px-3 py-2 text-xs font-bold uppercase tracking-widest text-white transition duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:min-w-18' onClick={()=>{
          setFontSize(fontSize-1)
          console.log(fontSize)
        }}>Font-</button>
        </div>

    </div>
  )
}

export default Navbar
