import React from 'react'
import CompC from './CompC'
const CompB = () => {
  return (
    <div className='border-2 border-solid border-black p-15'>
      <h1>Component B</h1>
      <CompC />
    </div>
  )
}

export default CompB
