import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      HY from home
    <br></br>
    <br></br>
      <button className='h-10 w-50 bg-yellow-500' onClick={()=>{
        navigate('/jobs')
      }}>Go to Jobs</button>
    </div>
  )
}

export default Home
