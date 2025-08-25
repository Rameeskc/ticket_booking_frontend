import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(menuOpen);

  const items = [
    {
      id: 1,
      name: "Home",
      link: "/home",
    },
    {
      id: 2,
      name: "Show Time",
      link: "/showtime"
    },
    {
      id: 3,
      name: "Coming Soon",
      link: "/comingsoon",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contactus"
    },
  ]

  return (
    <div className="w-screen h-16 flex items-center px-4">
      <div className='w-1/2 lg:w-1/3 lg:pl-14'>
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className='hidden lg:flex lg:w-1/3 h-full justify-center items-center'>
        <div className='hidden lg:block w-full h-2/3 rounded-4xl bg-white/10 backdrop-blur-lg '>
          <ul className=' w-full h-full flex items-center  justify-around'>
            {
              items.map((item, id) => (
                <li key={id} className=' hover:text-red-600'>{item.name}</li>

              ))
            }
          </ul>
        </div>

      </div>
      <div className='hidden lg:w-1/3 lg:flex items-center justify-end pr-14'>
        <button className='h-10 w-20 bg-red-700 rounded-4xl'>Login</button>
      </div>
      <div className='lg:hidden flex w-1/2 items-center justify-end pr-4'>
        <button className='text-white'
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg p-4 lg:hidden 
    transition-all duration-500 ease-in-out 
    ${menuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col space-y-4 text-center">
          {items.map((item) => (
            <li
              key={item.id}
            >
              {item.name}
            </li>
          ))}
          <li>
            <button className="h-10 w-full bg-red-700 rounded-4xl">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar