import React from 'react'
import { useNavigate } from 'react-router-dom'

const LibrarianUpdate = () => {

    // Use navigate
    const nav = useNavigate()

    const handleBack = () => {
        nav("/librarian/personal-details")
    }

    return (
        <div>
            <div className=''>
                <div className="flex min-h-full flex-col px-6 py-8 lg:px-8 mt-4">

                    {/* Header */}
                    <div className='text-3xl italic justify-center items-center'>
                        <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Update Librarian</p>
                    </div>

                    {/* Login Form */}
                    <div className=' flex justify-center'>
                        <form className="space-y-6 mt-8 w-[30%]" action="#" method="PUT">

                            {/* Top 4 credentials */}
                            <div className='justify-between items-center space-y-6'>

                                {/* Name */}
                                <div>
                                    <input id="name" name="name" type="text" placeholder='Name' required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>

                                {/* Email */}
                                <div>
                                    <input id="email" name="email" type="email" placeholder='E-mail' autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>

                                {/* Password */}
                                <div>
                                    <input id="password" name="password" type="password" placeholder='Password' autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>

                                {/* Contact */}
                                <div>
                                    <input id="contact" name="contact" type="text" placeholder='Contact' required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>

                                {/* Gender */}
                                <div className='flex justify-left space-x-5'>
                                    {/* <span>Gender </span> */}
                                    <div className='flex items-center'>
                                        <input type="radio" name="gender" id="male" value="Male" />
                                        <label className='px-2' for="male">Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="gender" id="female" value="Female" />
                                        <label className='px-2' for="female">Female</label>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className='flex w-full justify-around'>
                                <div>
                                    <button onClick={handleBack} type="submit" className="w-[130%] rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back</button>
                                </div>
                                <div>
                                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrarianUpdate