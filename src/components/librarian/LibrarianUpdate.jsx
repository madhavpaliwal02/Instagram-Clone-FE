import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { base_url_librarian } from '../../api/BootAPI'
import '../css/Update.css'

const LibrarianUpdate = () => {

    // use state
    const [librarian, setLibrarian] = useState([

    ])

    // Use Location
    const { state } = useLocation();
    const { libObj } = state;


    // Use navigate
    const nav = useNavigate()

    // Handle back button
    const handleBack = () => {
        nav("/librarian/personal-details")
    }

    // Handle Update Form
    const handleUpdateForm = (e) => {
        updateLibrarianData(librarian, librarian.libId)
        e.preventDefault()
    }

    // Update the data on the server
    const updateLibrarianData = (data, id) => {
        axios.put(`${base_url_librarian}/${id}`, data).then(
            (response) => {
                toast.success("Librarian Updated Succesfully", { position: "top-right" })
                nav("/librarian/personal-details")
            },
            (error) => {
                toast.error("Something went wrong, try again later", { position: "top-right" })
            }
        )
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
                        <form className="space-y-6 mt-8 w-[30%]" action={handleUpdateForm} method="PUT">

                            {/* Top 4 credentials */}
                            <div className='justify-between items-center space-y-6'>

                                {/* Name */}
                                <div>
                                    <input value={libObj.name} name="name" type="text" placeholder='Name' required className="form-input"
                                        onChange={(e) => {
                                            setLibrarian({ ...librarian, name: e.target.default })
                                        }} />
                                </div>

                                {/* Email */}
                                <div>
                                    <input value={libObj.email} name="email" type="email" placeholder='E-mail' autocomplete="email" required className="form-input"
                                        onChange={(e) => {
                                            setLibrarian({ ...librarian, email: e.target.default })
                                        }} />
                                </div>

                                {/* Password */}
                                <div>
                                    <input value={libObj.password} name="password" type="password" placeholder='Password' autocomplete="current-password" required className="form-input"
                                        onChange={(e) => {
                                            setLibrarian({ ...librarian, password: e.target.default })
                                        }} />
                                </div>

                                {/* Contact */}
                                <div>
                                    <input value={libObj.contact} name="contact" type="text" placeholder='Contact' required className="form-input"
                                        onChange={(e) => {
                                            setLibrarian({ ...librarian, contact: e.target.default })
                                        }} />
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
                                <div className='w-[25%]'>
                                    <button onClick={handleBack} type="submit" className="form-button">Back</button>
                                </div>
                                <div className='w-[25%]'>
                                    <button type="submit" className="form-button">Update</button>
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