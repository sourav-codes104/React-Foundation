import React, { useState } from 'react'
import fontContext from '../context/Font.context'
import { useContext } from 'react'

function Body() {
    const[input,setInput] = useState("")
    const {fontSize,setFontSize} = useContext(fontContext)
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-12 bg-[radial-gradient(circle_at_15%_10%,rgba(224,174,88,0.22),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(94,143,132,0.16),transparent_30%)] px-5 py-8'>
      <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-5 text-center'>
      <label htmlFor='input' className='text-4xl font-bold leading-none tracking-tight text-[#25313b] sm:text-6xl'>Enter anything</label>
      <input className='w-full max-w-lg rounded-xl border border-[#25313b]/20 bg-[#fffdf9]/80 px-5 py-4 text-center text-2xl text-[#25313b] shadow-xl outline-none transition focus:border-[#317d6f] focus:bg-white focus:ring-4 focus:ring-[#317d6f]/15' type="text" id="input" onChange={(e)=>{
        setInput(e.target.value)
      }}></input>
    </div>
    <div className='min-h-18 max-w-[90vw] overflow-wrap-anywhere px-4 py-3 text-center font-bold leading-tight text-[#317d6f]' style={{fontSize:fontSize}}>{input}</div>
    </div>
  )
}

export default Body
