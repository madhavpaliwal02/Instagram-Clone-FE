import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/Logo.png'

//styles
import './Navbar.css';

const Navbar = () => {
    // Use Navigate
    const nav = useNavigate()

    // Handle Logo
    const handleLogo = () => {
        nav("/")
    }
    return (
        <div className='nav-style shadow-md shadow-black-100 z-10'>
            <div className='navbar'>
                {/* Logo */}
                <div className='logo'>
                    {/* w-[20%] flex justify-center items-center */}
                    <img onClick={handleLogo} className='w-30 h-20 cursor-pointer' src={logo} alt="/" />
                </div>
                {/* Text */}
                <div className='header'>
                    {/* w-full mt-2 flex  flex-col justify-center items-center absolute */}
                    <p className='text-3xl font-medium hover:font-bold antialiased italic'>Welcome to the LIMSY</p>
                    <p className='text-sm opacity-60'>A Library Management System</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Navbar