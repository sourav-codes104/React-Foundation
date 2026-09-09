import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-gray-300'>
      <ul className='flex justify-center items-center gap-5 h-10 px-3' >
        <li>
            <NavLink to='/' className={({isActive})=>{
              return isActive ? "text-blue-600 font-bold" :"text-black"
            }}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/jobs' className={({isActive})=>{
              return isActive ? "text-blue-600 font-bold" :"text-black"
            }}>Jobs</NavLink>
        </li>
        <li>
            <NavLink to='/login' className={({isActive})=>{
              return isActive ? "text-blue-600 font-bold" :"text-black"
            }}>Login</NavLink>
        </li>
        <li>
            <NavLink to='/profile' className={({isActive})=>{
              return isActive ? "text-blue-600 font-bold" :"text-black"
            }}>Profile</NavLink>
        </li>
        <li>
            <NavLink to='/Location' className={({isActive})=>{
              return isActive ? "text-blue-600 font-bold" :"text-black"
            }}>Location</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
