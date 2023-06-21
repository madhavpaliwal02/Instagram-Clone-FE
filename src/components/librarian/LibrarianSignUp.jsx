import axios from 'axios'
import React, { useState } from 'react'
import { base_url_librarian } from '../../api/BootAPI'
import '../css/Login.css'

const LibrarianSignUp = () => {

  // use state
  const [librarian, setlibrarian] = useState({

  })

  // Handle form
  const handleLibrarianForm = (e) => {
    postLibrarianDataToServer(librarian)
    console.log(librarian)
    e.preventDefault();
  }

  // Post data handler
  const postLibrarianDataToServer = (data) => {
    axios.post(`${base_url_librarian}`, data).then(
      (response) => {
        console.log("data: ", response.data)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  // // use Effect
  // useEffect(() => {

  // })


  return (
    <div className='w-[40%] my-4'>
      {/* SignUp Form */}
      <div className='flex justify-center'>
        <form onSubmit={handleLibrarianForm} className="space-y-5 mt-2 " action="#" method="POST">

          {/* Form Grids */}
          <div className='flex flex-col justify-around items-center'>
            {/* Left */}
            <div className='flex'>

              {/* Name */}
              <div class="content-center">
                <label for="name" class="form-label">
                  Name
                </label>
                <input id='name' name="name" class="form-input" type="text" placeholder="Enter your name"
                  onChange={(e) => {
                    setlibrarian({ ...librarian, name: e.target.value });
                  }} />
              </div>

              {/* Contact */}
              <div class="ml-8 content-center">
                <label for="contact" class="form-label">
                  Contact
                </label>
                <input id='contact' name='contact' class="form-input" type="text" placeholder="Enter your contact" onChange={(e) => {
                  setlibrarian({ ...librarian, contact: e.target.value });
                }} />
              </div>

            </div>

            {/* Right */}
            <div className='flex mt-8'>
              {/* Email */}
              <div class="relative">
                <label for='email' class="form-label">Email</label>
                <input id='email' name='email' class="form-input" type="email" placeholder="Type your mail id" onChange={(e) => {
                  setlibrarian({ ...librarian, email: e.target.value });
                }} />
              </div>

              {/* Password */}
              <div class="ml-8 content-center">
                <label for='password' class="form-label">
                  Password
                </label>
                <input id='password' name='password' class="form-input" type="password" placeholder="Enter your password" onChange={(e) => {
                  setlibrarian({ ...librarian, password: e.target.value });
                }} />
              </div>
            </div>

            {/* Gender */}
            <div className='flex justify-left mt-4 space-x-5'>
              {/* <span>Gender </span> */}
              <div className='flex' >
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
          <div className='flex items-center justify-center space-x-8 mt-5'>
            <button type="reset" className="form-button">Reset</button>
            <button type="submit" className="form-button">Sign Up</button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default LibrarianSignUp

