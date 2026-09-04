import React, { useState } from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/Theme.context'


const Body = () => {
  const{theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='flex flex-1 flex-col items-center 'style={{backgroundColor: theme=="light" ? "white" : "black",
      color: theme=="light"?"black" : "white"
    }}>
      <h1 className='px-6 py-10 text-6xl'>Welcome to my App</h1>
      <h1 className='mt-2 px-4 py-4 text-3xl'>This is the light theme Page</h1>
    </div>
  )
}

export default Body
