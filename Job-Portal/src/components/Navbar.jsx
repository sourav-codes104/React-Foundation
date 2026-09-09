import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className='flex bg-green-500 px-5 py-2'>
        <Link to="/">
        <img src = {logo} className='w-30'></img>
        </Link>
      <ul className='flex ml-auto gap-10 items-center'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/jobs">Jobs</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
