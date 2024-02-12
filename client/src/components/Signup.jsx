/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center font-openSans bg-[#FCEED5] m-auto p-3">
      <div className="w-[400px] h-auto flex flex-col items-center p-2 m-auto">
        <div className="bg-gray-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-zinc-500 shadow-lg">
          <div className="w-full text-center font-Roboto py-2 px-4 shadow-lg shadow-gray-300">
            <h2 className='text-lg font-semibold'>Sign Up here.</h2>
            <p className=''>Please enter your detials.</p>
            <div className='border-b-2 border-black my-2 rounded-lg'></div>
          </div>
          <form className='flex flex-col items-start'>
            <label className='text-lg my-2' htmlFor="name">Name: </label>
            <input className='py-2 px-4 rounded-md border-none outline-none' placeholder="Enter Your Name" type="text" id='name' />
            <label className='text-lg my-2' htmlFor="email">Email: </label>
            <input className='py-2 px-4 rounded-md border-none outline-none' placeholder="Enter Your Email" type="email" id="email" />
            <label className='text-lg my-2' htmlFor="password">Password: </label>
            <input className='py-2 px-4 rounded-md border-none outline-none' placeholder="****" type="password" id="password" />
            <button className='w-full my-4 p-2 rounded-md text-white font-semibold bg-[#0b446c] hover:bg-[#0d5182] active:bg-[#0d5182]'>Sign Up</button>
          </form>
        </div>
        <div className='my-4 py-2'>
          <p className='text-lg'>Already have an account.<span>
            <Link className='font-semibold text-blue-700' to={"/login"}>Login</Link>
          </span> here.</p>
        </div>

      </div>
    </div>
  )
}

export default Signup