import React from 'react'
import { useLocation } from 'react-router-dom'

function Location() {
    const location = useLocation();
    console.log(location);
  return (
    <div>
      Location Page {location.pathname}
    </div>
  )
}

export default Location
