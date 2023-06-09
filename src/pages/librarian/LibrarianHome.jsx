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
        <div>
            <div class="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center"
            >

                <div class="max-w-md w-full space-y-8 p-5 rounded-xl ">
                    <div class="text-center">
                        <h2 class="mt-6 text-3xl font-bold text-gray-900">
                            {currPage ? 'Welcome Back Librarian!' : 'Welcome Librarian'}
                        </h2>

                    </div>

                    <div class="flex items-center justify-center space-x-2">
                        <span class="h-px w-16 bg-gray-300"></span>
                        <span class="text-gray-500 font-normal">LIMSY</span>
                        <span class="h-px w-16 bg-gray-300"></span>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="relative">
                            <div class="absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            </div>
                            <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                            <input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none  text-center focus:border-indigo-500" type="" placeholder="Type your mail id" />
                        </div>
                        <div class="mt-8 content-center">
                            <label class="text-sm font-bold text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none text-center focus:border-indigo-500" type="" placeholder="Enter your password" />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
                                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div class="text-sm">
                                <a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
                                    {currPage ? ' Forgot your password?' : ''}
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                {currPage ? 'Sign In' : 'Sign Up'}
                            </button>
                        </div>
                        <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            {currPage ? <span>Don't have an account?</span> : <span>Have an account?</span>}
                            <div class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300" onClick={() => { setCurrPage(!currPage) }}>{currPage ? ' Sign Up' : 'Sign In'}</div>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        // <div className='mt-10'>
        //     {/* Header */}
        //     <div className='text-3xl italic font-bold text-indigo-600'>
        //         <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
        //             {
        //                 currPage ?
        //                     "Librarian Sign-In"
        //                     :
        //                     "Librarian Sign-Up"
        //             }
        //         </p>
        //     </div>

        //     {/* Login / Signup */}
        //     <div className='flex justify-center items-center'>
        //         {currPage ? <LibrarianSignIn /> : <LibrarianSignUp />}
        //     </div>

        //     {/* Switching b/w them */}
        //     <div className='text-center text-sm text-gray-500'>
        //         {currPage ?
        //             <div>
        //                 Don't have an account ? <span className='text-blue-700 cursor-pointer'
        //                     onClick={handleLogin}>Click Here...</span>
        //             </div>
        //             :
        //             <div>
        //                 Already have an account ? <span className='text-blue-700 cursor-pointer'
        //                     onClick={handleLogin}>Click Here...</span>
        //             </div>
        //         }
        //     </div>
        // </div>
    )
}

export default LibrarianHome