import React from 'react'
import logo from '../images/logo.svg'

const NavBar = () => {
  const elements = [
    {
      name:"Home",
      link:"/home",
    },
    {
      name:"Show Time",
      link:"/showtime"
    },
    {
      name:"Coming Soon",
      link:"/comingsoon",
    },
    {
      name:"Contact Us",
      link:"/contactus"
    },
  ]

    return (
        <div className="w-screen h-16 flex items-center px-4 bg-gray-500">
          <div className='w-1/3'>
          <img src={logo} alt="Logo" className="h-8" />
          </div>
          <div  className='w-1/3'>sa</div>
          <div  className='w-1/3'>asdf</div>
          
        </div>
      );
}

export default NavBar