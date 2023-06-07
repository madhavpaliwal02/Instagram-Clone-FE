import React from 'react'
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'
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
        <div className='bottom-0 mx-5'>
            <div className='flex items-center justify-around h-screen pb-40'>

                {/* Librarian  */}
                <div onClick={handleLibrarian} className='border flex flex-col items-center rounded-tl-lg rounded-br-lg cursor-pointer bg-sky-300 px-3 py-2 shadow-lg shadow-black-600/50'>
                    <FaUserTie className='text-8xl pb-3' />
                    <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Librarian</button>
                </div>

                {/* Student */}
                <div onClick={handleStudent} className='border flex flex-col items-center rounded-tl-lg rounded-br-lg cursor-pointer bg-sky-300 px-3 py-2 shadow-lg shadow-black-600/50'>
                    <FaUserGraduate className='text-8xl pb-3' />
                    <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Student</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage