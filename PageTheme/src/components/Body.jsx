import React from 'react'
import ThemeContext from '../Theme.context'
import { useContext } from 'react'
const Body = () => {
  const{theme,setTheme} = useContext(ThemeContext)
  return (
    <div className='flex-1 flex flex-col gap-4 bg-red-300 justify-center items-center 'style={{fontFamily:"Helvetica", backgroundColor : theme=="Light" ? "White":"Black", color : theme==="Light"?"Black":"White"}}>
      <h1 className='px-10 py-6 text-5xl'>Welcome to my page</h1>
      <h1 className='px-5 py-3 text-2xl'>This page is to test contextAPI/useContext Hook</h1>
    </div>
  )
}

export default Body
