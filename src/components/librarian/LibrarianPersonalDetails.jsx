import React from 'react'
import { useNavigate } from 'react-router-dom'

const LibrarianPersonalDetails = () => {

  // Use Navigate
  const nav = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    nav("/librarian")
  }
  return (
    <div>
      {/* Header */}
      <div className='text-3xl italic justify-center items-center'>
        <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Personal Details</p>
      </div>

      {/* Personal Details */}
      <div className='flex flex-col w-[70%] mx-auto justify-center items-center mt-12 border py-4 bg-indigo-200 shadow-lg shadow-indigo-300/50 hover:shadow-indigo-300/40'>

        {/* Personal Details : Header */}
        <div className='flex justify-left items-left text-2xl text-left font-semibold'>About Me</div>

        {/* Personal Details : Body */}
        <div className='w-full flex justify-around items-center mt-4 font-mono text-lg'>
          {/* Left */}
          <div className='space-y-10 '>
            {/* Id */}
            <div className='flex'>
              <p className='font-semibold'>Id : </p>
              <p className='ml-2 opacity-80'>123456</p>
            </div>
            {/* Name */}
            <div className='flex'>
              <p className='font-semibold' >Name: </p>
              <p className='ml-2 opacity-80'>Palak Porwal</p>
            </div>
            {/* Email */}
            <div className='flex'>
              <p className='font-semibold' >Email:</p>
              <p className='ml-2 opacity-80'>palakporwal2504@gmail.com</p>
            </div>
          </div>

          {/* Right */}
          <div className='space-y-10'>
            {/* Gender */}
            <div className='flex'>
              <p className='font-semibold' >Gender:</p>
              <p className='ml-2 opacity-80'>Female</p>
            </div>
            {/* Mobile No. */}
            <div className='flex'>
              <p className='font-semibold' >Mob No: </p>
              <p className='ml-2 opacity-80'>+91 81093 80731</p>
            </div>
            {/* Date */}
            <div className='flex'>
              <p className='font-semibold' >Date:</p>
              <p className='ml-2 opacity-80'>25-04-2002</p>
            </div>
          </div>
        </div>

      </div>

      {/* Handle Update + logout */}
      <div className='flex justify-center w-full mt-8 py-4'>
        {/* Update */}
        <div>
          <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Update</button>
        </div>
        {/* Logout */}
        <div className='ml-10'>
          <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={handleLogout}>Logout</button>
        </div>
      </div>

    </div>
  )
}

export default LibrarianPersonalDetails