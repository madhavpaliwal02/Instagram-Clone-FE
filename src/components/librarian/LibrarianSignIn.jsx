import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { base_url_librarian } from '../../api/BootAPI'
import '../css/Login.css'
import { toast } from 'react-toastify'

const LibrarianSignIn = () => {

    // use state
    const [user, setUser] = useState({})

    // Use Navigation
    const nav = useNavigate();

    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value })
    }

    // Handle login form
    const handleLogin = (e) => {
        checkLogin(user)
        e.preventDefault();
    }

    // validate user
    const checkLogin = (data) => {
        axios.post(`${base_url_librarian}/login`, data).then(
            (response) => {
                // console.log(response.data)
                if (response.data === 'admin') {
                    localStorage.setItem("role", response.data)
                    nav("/librarian/admin/total-librarians")
                    toast.success("Welcome Admin !", { position: "top-right" })
                }
                else {
                    localStorage.setItem("libId", response.data)
                    // localStorage.setItem("role", "librarian")
                    nav("/librarian/personal-details")
                    toast.success("Successfully login to the Dashboard", { position: "top-right" })
                }
            },
            (error) => {
                console.log(error)
                nav("/librarian")
                toast.error("Invalid credentials", { position: "top-right" })
            }
        )
    }


    return (
        <div className='sign-in'>
            <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <form class="space-y-6" action="" method="POST">
                        {/* <input type="hidden" name="remember" value="true" /> */}

                        {/* Email */}
                        <div class="relative">
                            <label for='email' class="form-label">Email</label>
                            <input id='email' name='email' class="form-input" type="email" required placeholder="Type your mail id"
                                onChange={handleChange} />
                        </div>

                        {/* Password */}
                        <div class="mt-8 content-center">
                            <label for='password' class="form-label">
                                Password
                            </label>
                            <input id='password' name='password' class="form-input" type="password" required placeholder="Enter your password"
                                onChange={handleChange} />
                        </div>

                        {/* Remember */}
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember_me" name="remember_me" required type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
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