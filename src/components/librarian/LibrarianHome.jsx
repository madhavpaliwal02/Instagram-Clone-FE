import React, { useState } from 'react'
import LibrarianSignIn from './LibrarianSignIn';
import LibrarianSignUp from './LibrarianSignUp';

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
            <div className='text-4xl font-bold text-indigo-600'>
                {
                    currPage ?
                        <div>Librarian Sign-In</div>
                        :
                        <div>Librarian Sign-Up</div>
                }
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