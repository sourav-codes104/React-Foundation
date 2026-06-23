import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
const Section1 = (props) => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Content customerSegments={props.customerSegments}/>
    </div>
  )
}

export default Section1
