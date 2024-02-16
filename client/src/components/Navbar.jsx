/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import img from '../assets/portfolioLogNoBg.png';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavIcon = () => {
    setNav(!nav)
  }
  const handleClick = () => {
    setNav(!nav);
  }
  return (
    <div className='sticky top-0 w-full h-[80px] text-slate-950 flex flex-row justify-between items-center px-4 py-3 font-openSans bg-[#FCEED5]'>

      <div className="logo">
        <Link to="/">
          <img src={img} width={"50px"} alt="myImage" className='cursor-pointer' />
        </Link>
      </div>

      {/* Web View */}
      <div className="navLinks hidden md:w-[70%] md:flex md:flex-row md:items-center justify-between">
        <ul className='w-auto flex flex-row items-center justify-around'>
          <li>
            <Link className='py-3 px-5 mx-4 active:bg-red-100 rounded-sm font-semibold' to={"/"}>Home</Link>
          </li>
          <li>
            <Link className='py-3 px-5 mx-4 active:bg-red-100 rounded-sm font-semibold' to={"/products"}>Products</Link>
          </li>
          <li>
            <Link className='py-3 px-5 mx-4 active:bg-red-100 rounded-sm font-semibold' to={"/about"}>About</Link>
          </li>
          <li>
            <Link className='py-3 px-5 mx-4 active:bg-red-100 rounded-sm font-semibold' to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className="btns">
          {/* <Link to={"/signup"} className="bg-blue-600 text-white px-4 py-3 mx-auto rounded-md">SignUp / Login</Link> */}
          <Link to={"/signup"}>
            <button className="bg-[#0b446c] text-white font-semibold font-openSans hover:bg-[#1b6397] hover:cursor-pointer active:bg-blue-800 rounded-md px-4 py-2">
              SignUp / Login
            </button>
          </Link>
        </div>
      </div>

      {/* Hambuger */}
      <div onClick={handleNavIcon} className='block md:hidden z-10 hover:cursor-pointer' id='icons'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? `hidden` : `absolute top-0 left-0 w-full h-screen flex flex-col justify-evenly items-center bg-gray-100 text-black font-openSans font-semibold`}>
        <ul className="h-full flex flex-col items-center justify-center">
          <li className='py-6 text-3xl cursor-pointer'>
            <Link onClick={handleClick} className='active:bg-red-100 font-semibold' to={"/"}>Home</Link>
          </li>
          <li className='py-6 text-3xl cursor-pointer'>
            <Link onClick={handleClick} className='active:bg-red-100 font-semibold' to={"/products"}>Products</Link>
          </li>
          <li className='py-6 text-3xl cursor-pointer'>
            <Link onClick={handleClick} className='active:bg-red-100 font-semibold' to={"/about"}>About</Link>
          </li>
          <li className='py-6 text-3xl cursor-pointer'>
            <Link onClick={handleClick} className='active:bg-red-100 font-semibold' to={"/contact"}>Contact</Link>
          </li>
          <li className='py-6 text-xl cursor-pointer'>
            <Link onClick={handleClick} to={"/signup"}>
              <button className="bg-[#0b446c] text-white font-semibold font-openSans hover:bg-[#0d4f7d] hover:cursor-pointer active:bg-blue-800 rounded-md px-4 py-2">
                SignUp / Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;