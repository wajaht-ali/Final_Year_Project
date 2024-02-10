/* eslint-disable no-unused-vars */
import {FaBars, FaTime} from 'react-icons/fa';
import img from '../assets/portfolioLogNoBg.png';

const Navbar = () => {

  return (
    <div className='w-full h-[80px] bg-black-400 text-slate-950 flex flex-row justify-between items-center border-2 border-black px-4 py-2 font-Roboto'>
      <div className="logo">
        <img src={img} width={"40px"} alt="myImage" className='cursor-pointer'/>
      </div>
      <div className="navLinks">Navlinks</div>
      <div className="navButton"><FaBars /></div>
    </div>
  )
}

export default Navbar;