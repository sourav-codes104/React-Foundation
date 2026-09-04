import React from 'react'
import { useContext } from 'react'
import userContext from '../context/user.context'

const CompD = () => {
  const name = useContext(userContext);
  return (
    <div className='border-2 border-solid border-black p-15'>
      <h1>Component D</h1>
      <h2>By {name}</h2>
    </div>
  )
}

export default CompD
