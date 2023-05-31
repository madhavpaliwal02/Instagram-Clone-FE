import React from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='flex mt-2  text-center'>
                <div className='w-[18%] flex justify-center items-center'>
                    <img className='w-20 h-20 rounded-full cursor-pointer' src={logo} alt="/" />
                </div>
                <div className='w-full mt-2 flex justify-center items-center absolute'>
                    <p className='text-3xl hover:font-bold font-semibold antialiased italic'>Welcome to the LIMSY</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Navbar