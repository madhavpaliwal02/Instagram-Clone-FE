import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { base_url_librarian } from '../../api/BootAPI'
import '../css/Update.css'

const LibrarianUpdate = () => {

    // use state
    const [librarian, setLibrarian] = useState('')

    // Use Location
    const { state } = useLocation();
    const { libId } = state;

    // Use navigate
    const nav = useNavigate()

    // Handle back button
    const handleBack = () => {
        nav("/librarian/personal-details")
    }

    // use effect
    useEffect(() => {
        // console.log("libId: ", libId)
        fetchOldDataFromServer()
    }, [])

    // fetch old data from server
    const fetchOldDataFromServer = () => {
        axios.get(`${base_url_librarian}/${libId}`).then(
            (response) => {
                setLibrarian(response.data)
                console.log("response.data", response.data)
            },
            (error) => { }
        )
    }

    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target

        setLibrarian({ ...librarian, [name]: value })
    }

    // Handle Update Form
    const handleUpdateForm = (e) => {
        console.log("handle")
        updateLibrarianData(librarian, libId)
        e.preventDefault()
    }

    // Update the data on the server
    const updateLibrarianData = (data, id) => {
        console.log("Data:", data, " id: ", id)
        axios.put(`${base_url_librarian}/${id}`, data).then(
            (response) => {
                toast.success("Librarian Updated Succesfully", { position: "top-right" })
                nav("/librarian/personal-details")
            },
            (error) => {
                toast.error("Something went wrong, try again later", { position: "top-right" })
            }
        )
        // window.location.reload()
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
                        <form className="space-y-6 mt-8 w-[30%]" onSubmit={handleUpdateForm} method="PUT">

                            {/* All 4 credentials */}
                            <div className='justify-between items-center space-y-6'>

                                {/* Name */}
                                <div>
                                    <input value={librarian.name} name="name" type="text" placeholder='Name' required className="form-input"
                                        onChange={handleChange} />
                                </div>

                                {/* Email */}
                                <div>
                                    <input value={librarian.email} name="email" type="email" placeholder='E-mail' autocomplete="email" required className="form-input"
                                        onChange={handleChange} />
                                </div>

                                {/* Password */}
                                <div>
                                    <input value={librarian.password} name="password" type="password" placeholder='Password' autocomplete="current-password" required className="form-input"
                                        onChange={handleChange} />
                                </div>

                                {/* Contact */}
                                <div>
                                    <input value={librarian.contact} name="contact" type="text" placeholder='Contact' required className="form-input"
                                        onChange={handleChange} />
                                </div>

                                {/* Gender */}
                                <div className='flex justify-left space-x-5'>
                                    {/* <span>Gender </span> */}
                                    <div className='flex items-center'>
                                        <input type="radio" name="gender" id="male" value="Male" onChange={handleChange} checked={librarian.gender === 'Male'} />
                                        <label className='px-2' for="male">Male</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="gender" id="female" value="Female" onChange={handleChange} checked={librarian.gender === 'Female'} />
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