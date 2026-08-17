import React, { useState } from 'react'

function App() {
  const [color,setColor] = useState("bg-gray-500");

  return (
    <>
      <div className={`w-full h-screen ${color} flex flex-row gap-5 relative`}>
        <div className='w-5xl h-11 bg-rose-200 flex justify-around rounded-3xl items-center bottom-4 fixed left-1/2 -translate-x-1/2'>
        <button onClick={()=>{setColor("bg-blue-500")}} className='h-8 w-18 bg-blue-500 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline'>Blue</button>
        <button onClick={()=>{setColor("bg-pink-500")}} className='h-8 w-18 bg-pink-500 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Pink</button>
        <button onClick={()=>{setColor("bg-green-500")}} className='h-8 w-18 bg-green-500 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Green</button>
        <button onClick={()=>{setColor("bg-red-500")}} className='h-8 w-18 bg-red-500 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Red</button>
        <button onClick={()=>{setColor("bg-orange-500")}} className='h-8 w-18 bg-orange-400 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Orange</button>
        <button onClick={()=>{setColor("bg-purple-500")}} className='h-8 w-18 bg-purple-500 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Purple</button>
        <button onClick={()=>{setColor("bg-yellow-400")}} className='h-8 w-18 bg-yellow-400 rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Yellow</button>
        <button onClick={()=>{setColor("bg-violet-500")}} className='h-8 w-18 bg-violet-500  rounded-4xl transition-transform duration-300  hover:-translate-y-2 hover:scale-103 hover:text-white hover:underline hover:shadow-2xl'>Violet</button>
      </div>
      </div>
    </>
  )
}

export default App
