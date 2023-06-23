import React, { useEffect, useState } from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { base_url_librarian } from '../../api/BootAPI';

const LibrarianPersonalDetails = () => {

  // Use Navigate
  const nav = useNavigate();

  // Use state
  const [librarian, setLibrarian] = useState({

  })

  // Getting the libId
  const libId = localStorage.getItem("libId")
  // console.log("LibId: ", libId)

  // Handle Update Librarian
  const handleUpdateLibrarian = () => {
    nav("/librarian/update", { state: { libObj: librarian } })
  }

  useEffect(() => {
    getLibrarian();
  }, [])

  const getLibrarian = () => {
    axios.get(`${base_url_librarian}/${libId}`).then(
      (response) => {
        // console.log(response.data)
        setLibrarian(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }



  return (
    <div>
      {/* Header */}
      <div className='text-3xl italic justify-center items-center'>
        <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Personal Details</p>
      </div>

      {/* Personal Details */}
      <div className='flex flex-col w-[95%] mx-auto justify-center items-center mt-12 border py-4 bg-wheat-200 shadow-lg shadow-black-300/50 hover:shadow-black-300/40'>

        {/* Header + Update */}
        <div className='w-full flex justify-between'>
          {/* Personal Details : Header */}
          <div className='w-[90%] flex justify-center'>
            <div className='flex justify-left items-left text-2xl text-left font-semibold'>About Me</div>
          </div>

          {/* Update */}
          <div onClick={handleUpdateLibrarian} className='w-[7%] flex items-center justify-center text-3xl cursor-pointer hover:text-2xl'>
            <FaUserEdit className='hover:shadow-md' />
          </div>
        </div>

        {/* Personal Details : Body */}
        <div className='w-full flex justify-around items-center mt-4 font-mono text-lg'>
          {/* Left */}
          <div className='space-y-10 '>
            {/* Id */}
            <div className='flex'>
              <p className='font-semibold'>Id : </p>
              <p className='ml-2 opacity-80'>{librarian.libId}</p>
            </div>
            {/* Name */}
            <div className='flex'>
              <p className='font-semibold' >Name: </p>
              <p className='ml-2 opacity-80'>{librarian.name}</p>
            </div>
            {/* Email */}
            <div className='flex'>
              <p className='font-semibold' >Email:</p>
              <p className='ml-2 opacity-80'>{librarian.email}</p>
            </div>
          </div>

          {/* Right */}
          <div className='space-y-10'>
            {/* Gender */}
            <div className='flex'>
              <p className='font-semibold' >Gender: </p>
              <p className='ml-2 opacity-80'>{librarian.gender}</p>
            </div>
            {/* Mobile No. */}
            <div className='flex'>
              <p className='font-semibold' >Mob No: </p>
              <p className='ml-2 opacity-80'>{librarian.contact}</p>
            </div>
            {/* Date */}
            <div className='flex'>
              <p className='font-semibold' >Date:</p>
              <p className='ml-2 opacity-80'>{librarian.date}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LibrarianPersonalDetails