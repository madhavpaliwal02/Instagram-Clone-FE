import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { base_url_librarian } from '../../api/BootAPI'
import '../css/Login.css'
import { toast } from 'react-toastify'

const LibrarianSignIn = () => {

    // use state
    const [user, setUser] = useState({

    })

    // Use Navigation
    const nav = useNavigate();


    const handleLogin = (e) => {
        checkLogin(user)
        e.preventDefault();
        // nav("/librarian/personal-details")
    }

    // validate user
    const checkLogin = (data) => {
        // axios.post(`${base_url_librarian}/login`, data).then(
        //     (response) => {
        //         // console.log(response.data)
        //         localStorage.setItem("libId", response.data)
        nav("/librarian/personal-details")
        toast.success("Successfully login to the Dashboard", { position: "top-right" })
        //     },
        //     (error) => {
        //         console.log(error)
        //         nav("/librarian")
        //     }
        // )
    }


    return (
        <div className='w-[30%]'>
            <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <form class="space-y-6" action="" method="POST">
                        {/* <input type="hidden" name="remember" value="true" /> */}

                        {/* Email */}
                        <div class="relative">
                            <div class="absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            </div>
                            <label for='email' class="form-label">Email</label>
                            <input id='email' name='email' class="form-input" type="email" required placeholder="Type your mail id"
                                onChange={(e) => {
                                    setUser({ ...user, email: e.target.value });
                                }} />
                        </div>

                        {/* Password */}
                        <div class="mt-8 content-center">
                            <label for='password' class="form-label">
                                Password
                            </label>
                            <input id='password' name='password' class="form-input" type="password" required placeholder="Enter your password"
                                onChange={(e) => {
                                    setUser({ ...user, password: e.target.value });
                                }} />
                        </div>

                        {/* Remember */}
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
                                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            {/* <div class="text-sm">
                                <a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
                                    {currPage ? ' Forgot your password?' : ''}
                                </a>
                            </div> */}
                        </div>

                        <div className='mt-5'>
                            <button onClick={handleLogin} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}



export default LibrarianSignIn