import React, { useEffect, useState } from 'react'

const App = () => {
    const [text,setText] = useState("");
    const [length,setLength] = useState(0);
    useEffect(()=>{
        setLength(text.length)
    },[text])
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10'>
      <div className='flex w-full max-w-2xl flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-8'>
      <div className='flex flex-col gap-3 rounded-xl bg-slate-800 p-5 text-white sm:p-6'>
            <label htmlFor='text' className='text-sm font-semibold uppercase tracking-widest text-slate-300'>Enter anything: </label>
        <input onChange={(e)=>{
                setText(e.target.value)
        }} type='text' id='text' className='h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/20'></input>
        </div>
      <div className='flex min-h-24 items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-emerald-950 sm:px-6'>
            <h1 className='text-xl font-bold tracking-tight sm:text-2xl'>Length :{length}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
