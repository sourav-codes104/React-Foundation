import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
const App = () => {
  return (
    <div className='flex min-h-screen flex-col overflow-hidden bg-[#f4efe7] text-[#25313b]'>
      <Navbar/>
      <Body/>
    </div>
  )
}

export default App
