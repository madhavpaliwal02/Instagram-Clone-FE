import React from 'react'
import { useNavigate } from 'react-router-dom'

const LibrarianSignIn = () => {
    // Use Navigation
    const nav = useNavigate();

    const handleLogin = () => {
        nav("/librarian/personal-details")
    }
    return (
        <div className='w-[30%]'>
            <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    {/* Login Form */}
                    <form className="space-y-6" action="#" method="POST">

                        {/* Email */}
                        <div>
                            {/* <label for="email" className="text-left block text-sm font-medium leading-6 text-gray-900">Email address</label> */}
                            <div className="mt-2">
                                <input id="email" name="email" type="email" placeholder='E-mails' autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between">
                                {/* <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label> */}
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" placeholder='Password' autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                <a className="font-semibold opacity-70 text-indigo-600 hover:text-indigo-500 inactive text-sm">Forgot password?</a>
                            </div>
                        </div>

                        {/* Submit Button */}
                        {/* <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div> */}
                    </form>
                    <div className='mt-5'>
                        <button onClick={handleLogin} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrarianSignIn