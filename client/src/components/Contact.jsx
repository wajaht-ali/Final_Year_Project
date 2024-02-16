/* eslint-disable no-unused-vars */
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";


const Contact = () => {
  return (
    <div className='h-auto p-2 md:p-4 w-full bg-[#FCEED5] text-black'>
      <div className="flex flex-col items-center justify-between mx-auto p-2">

        <div className='w-full flex flex-col items-center justify-center rounded-md'>

          <div className='flex flex-col items-center justify-center my-2 w-[80%]'>
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p className='text-center md:py-2 md:text-lg'>If you have any query, please let me know.</p>
            <div className='w-full md:w-[50%] border-2 border-b-black rounded-lg my-2'></div>
          </div>

          <div className='flex flex-col items-center justify-center my-2 p-4 w-[80%] shadow-lg rounded-md shadow-black'>
            <form >
              <div className='flex flex-col'>
                <label className='font-bold my-2' htmlFor="name">Name:</label>
                <input className='p-2 rounded-md' type="text" id="name" placeholder='Enter Name' />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold my-2' htmlFor="email">Email:</label>
                <input className='p-2 rounded-md' type="text" id="email" placeholder='Enter Email' />
              </div>
              <div className='flex flex-col'>
                <label className='font-bold my-2' htmlFor="message">Message:</label>
                <textarea className='rounded p-2' id="message" cols="35" rows="08" placeholder='Enter Message here'></textarea>
                <button className='w-[50%] my-4 p-2 rounded-md text-white font-semibold bg-[#0b446c] hover:bg-[#0d5182] active:bg-[#0d5182] mx-auto'>Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row items-center justify-between md:gap-4 rounded-md md:p-4'>

          <div className='flex flex-col items-center justify-center w-[80%] my-2 p-4 rounded-md shadow-lg shadow-gray-400'>
            <FaPhoneAlt className='my-4' size={40} />
            <p className='my-2 font-bold'>Give ME A Call.</p>
            <p className='my-2'>+92 000 111 222 3</p>
          </div>
          <div className='flex flex-col items-center justify-center w-[80%] my-3 p-4 rounded-md shadow-lg shadow-gray-400'>
            <MdOutlineEmail className='my-4' size={40} />
            <p className='my-2 font-bold'>Send Me An Email.</p>
            <p className='my-2'>contact.chwajahat@gamil.com</p>
          </div>
          <div className='flex flex-col items-center justify-center w-[80%] my-3 p-4 rounded-md shadow-lg shadow-gray-400'>
            <MdOutlineLocationOn className='my-4' size={40} />
            <p className='my-2 font-bold'>Or Visit My Office.</p>
            <p className='my-2'>Haripur, 22620, K.P.K</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact