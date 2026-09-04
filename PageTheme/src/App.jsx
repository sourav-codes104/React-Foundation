import React, { use, useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import ThemeContext from './context/Theme.context'


const App = () => {
  const[theme,setTheme] = useState("light")
  return (
    <div className='h-screen flex flex-col'>
      <ThemeContext.Provider value={{theme ,setTheme}} >
        <Navbar/>
        <Body/>
      </ThemeContext.Provider>

    </div>
  )
}

export default App
