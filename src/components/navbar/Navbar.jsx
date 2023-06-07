import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'

const Navbar = () => {
    // Use Navigate
    const nav = useNavigate()

    // Handle Logo
    const handleLogo = () => {
        nav("/")
    }
    return (
        <div className='shadow-lg shadow-black-100'>
            <div className='flex mt-2 text-center'>
                {/* Logo */}
                <div onClick={handleLogo} className='w-[20%] flex justify-center items-center cursor-pointer'>
                    <img className='w-20 h-20 rounded-full' src={logo} alt="/" />
                </div>
                {/* Text */}
                <div className='w-full mt-2 flex flex-col justify-center items-center absolute'>
                    <p className='text-3xl font-medium hover:font-bold antialiased italic'>Welcome to the LIMSY</p>
                    <p className='text-sm opacity-60'>A Library Management System</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Navbar