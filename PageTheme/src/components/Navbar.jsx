import React from 'react'
import ThemeContext from '../Theme.context'
import { useContext } from 'react'
const Navbar = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div className='flex justify-between bg-gray-200'>
      <h1 className=' mx-3 my-3 px-3 py-2 bg-blue-300 rounded-lg '>Home</h1>
      <button onClick={()=>{
        setTheme(theme==="Light"?"Dark" :"Light")
      }} className='mx-3 my-3  px-3 py-2 bg-pink-400 rounded-lg'>{theme=="Light"?"Dark":"Light"}</button>
    </div>
  )
}

export default Navbar
