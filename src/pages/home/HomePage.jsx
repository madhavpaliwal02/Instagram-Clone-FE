import React from 'react'
import { FaUser, FaUserTie } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    // Navigation
    const nav = useNavigate();

    // Handle Librarian 
    const handleLibrarian = () => {
        nav("/librarian");
    }

    // Handle Student
    const handleStudent = () => {
        nav("/student");
    }

    return (
        <div className='h-[70vh] border mx-5'>
            <div className='flex items-center justify-around h-screen pb-40'>

                {/* Librarian  */}
                <div onClick={handleLibrarian} className='border flex flex-col items-center rounded-tl-lg rounded-br-lg cursor-pointer bg-blue-300 px-3 py-2'>
                    <FaUserTie className='text-8xl' />
                    <button className='text-4xl font-semibold hover:opacity-60'>Librarian</button>
                </div>

                {/* Student */}
                <div onClick={handleStudent} className='border flex flex-col items-center rounded-tl-lg rounded-br-lg bg-blue-300 px-3 py-2'>
                    <FaUser className='text-8xl' />
                    <button className='text-4xl font-semibold hover:opacity-60'>Student</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage