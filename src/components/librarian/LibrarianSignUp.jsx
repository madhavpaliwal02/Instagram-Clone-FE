import React from 'react'
// import {Radio } from ''

const LibrarianSignUp = () => {
  return (
    <div className='w-[40%] mt-4'>
      <div className="flex min-h-full flex-col justify-between px-6 py-8 lg:px-8">
        {/* <div className="sm:mx-auto w-full sm:max-w-lg"> */}

        {/* Login Form */}
        <form className="space-y-6" action="#" method="POST">

          {/* Top 4 credentials */}
          <div className='w-full flex justify-between items-center'>

            {/* Name + Contact */}
            <div className='flex flex-col justify-center items-center space-y-6'>
              {/* Name */}
              <div>
                {/* <label for="name" className="text-left block text-sm font-medium leading-6 text-gray-900">Full Name</label> */}
                <div className="mt-2">
                  <input id="name" name="name" type="text" placeholder='Name' required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              {/* Contact */}
              <div>
                {/* <label for="contact" className="text-left block text-sm font-medium leading-6 text-gray-900">Contact</label> */}
                <div className="mt-2">
                  <input id="contact" name="contact" type="text" placeholder='Contact' required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

            {/* Email + Password */}
            <div className='flex flex-col justify-center items-center space-y-6'>
              {/* Email */}
              <div>
                {/* <label for="email" className="text-left block text-sm font-medium leading-6 text-gray-900">Email address</label> */}
                <div className="mt-2">
                  <input id="email" name="email" type="email" placeholder='E-mail' autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  {/* <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label> */}
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" placeholder='Password' autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Gender */}
          <div className='flex space-x-5'>
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

          {/* Submit Button */}
          <div className='flex w-full justify-center'>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  )
}

export default LibrarianSignUp