import React, { useState } from 'react'
import StudentSignIn from '../../components/student/StudentSignIn';
import StudentSignUp from '../../components/student/StudentSignUp';

const StudentHome = () => {

    // Use State
    const [currPage, setCurrPage] = useState(true);

    // Handle login & signup
    const handleLogin = () => {
        setCurrPage(!currPage);
    }



    return (
        <div className='my-6'>

            {/* Header */}
            <div className='text-3xl italic font-bold text-black-600 mb-8'>
                <p className='m-auto  py-2'>
                    {
                        currPage ?
                            "Welcome Back ! Student"
                            :
                            "Welcome Student"
                    }
                </p>
            </div>

            {/* Form Header */}
            <div class="flex items-center justify-center space-x-2">
                <span class="h-px w-16 bg-gray-300"></span>
                <span class="text-gray-500 font-normal">
                    {
                        currPage ? "SIGN-IN" : "SIGN-UP"
                    }
                </span>
                <span class="h-px w-16 bg-gray-300"></span>
            </div>

            {/* Login / Signup */}
            <div className='flex justify-center items-center'>
                {currPage ? <StudentSignIn /> : <StudentSignUp />}
            </div>

            {/* Switching b/w them */}
            <div className='mt-6 flex justify-center text-sm text-gray-500'>
                {
                    currPage ? "Don't have an account ?" : "Already have an account ?"
                }
                <span className='text-blue-700 cursor-pointer'
                    onClick={handleLogin}> Click Here...</span>
            </div>
        </div>
    )
}

export default StudentHome