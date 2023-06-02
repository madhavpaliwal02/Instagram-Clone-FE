import React, { useState } from 'react'
import LibrarianSignIn from '../../components/librarian/LibrarianSignIn';
import LibrarianSignUp from '../../components/librarian/LibrarianSignUp';

const LibrarianHome = () => {

    // Use State
    const [currPage, setCurrPage] = useState(true);

    // Handle login & signup
    const handleLogin = () => {
        setCurrPage(!currPage);
    }

    return (
        <div className='mt-10'>
            {/* Header */}
            <div className='text-3xl italic font-bold text-indigo-600'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
                    {
                        currPage ?
                            "Librarian Sign-In"
                            :
                            "Librarian Sign-Up"
                    }
                </p>
            </div>

            {/* Login / Signup */}
            <div className='flex justify-center items-center'>
                {currPage ? <LibrarianSignIn /> : <LibrarianSignUp />}
            </div>

            {/* Switching b/w them */}
            <div className='text-center text-sm text-gray-500'>
                {currPage ?
                    <div>
                        Don't have an account ? <span className='text-blue-700 cursor-pointer'
                            onClick={handleLogin}>Click Here...</span>
                    </div>
                    :
                    <div>
                        Already have an account ? <span className='text-blue-700 cursor-pointer'
                            onClick={handleLogin}>Click Here...</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default LibrarianHome