import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div>
      Job ID  {id}
    </div>
  )
}

export default JobDetails
