import React from 'react'
import { RiLockFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='bg-yellow-200 flex px-10 py-2 justify-between mx-5 my-7 rounded-4xl'>
      <div className='italic text-[20px]  text-gray-500'>flavo</div>
      <div className=' flex justify-between  w-xl text-gray-500'>
        <div className='uppercase'>shop</div>
        <div className='uppercase'>our story</div>
        <div className='uppercase'>contact us</div>
      </div>
      <div ><RiLockFill className="text-black text-2xl" /></div>
    </div>
  )
}

export default Navbar
