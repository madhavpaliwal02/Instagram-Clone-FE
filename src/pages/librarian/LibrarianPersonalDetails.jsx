import React from 'react'
import { useNavigate } from 'react-router-dom'

const LibrarianPersonalDetails = () => {

  const nav = useNavigate();

  const handleLogout = () => {
    nav("/librarian")
  }
  return (
    <div>
      {/* Header */}
      <div className='text-3xl italic text-center items-center'>Personal Details</div>

      {/* Personal Details */}
      <div className='flex mt-8'>

        {/* Left */}
        <div className='flex flex-col w-[50%] ml-10 space-y-10'>
          {/* Id */}
          <div className='flex'>
            <p>Id: </p>
            <p className='ml-2'>123456</p>
          </div>
          {/* Name */}
          <div className='flex'>
            <p>Name: </p>
            <p className='ml-2'>Palak Porwal</p>
          </div>
          {/* Email */}
          <div className='flex'>
            <p>Email:</p>
            <p className='ml-2'>palakporwal2504@gmail.com</p>
          </div>
        </div>

        {/* Right */}
        <div className='flex flex-col w-[50%] space-y-10'>
          {/* Gender */}
          <div className='flex'>
            <p>Gender:</p>
            <p className='ml-2'>Female</p>
          </div>
          {/* Mobile No. */}
          <div className='flex'>
            <p>Mob No: </p>
            <p className='ml-2'>+91 81093 80731</p>
          </div>
          {/* Date */}
          <div className='flex'>
            <p>Date:</p>
            <p className='ml-2'>25-04-2002</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center w-full mt-8 py-4'>
        <div className='border bg-blue-300 px-3 py-2 cursor-pointer font-semibold hover:font-bold'>
          <button>Update</button>
        </div>
        <div className='border bg-blue-300 px-3 py-2 cursor-pointer font-semibold hover:font-bold ml-10'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

    </div>
  )
}

export default LibrarianPersonalDetails