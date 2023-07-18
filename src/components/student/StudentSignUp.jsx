import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { base_url_student } from '../../api/BootAPI'
import '../css/Login.css'
import './Student.css'

const StudentSignUp = () => {

    // use state
    const [student, setStudent] = useState([])


    // handle change
    const handlechange = (e) => {
        const { name, value } = e.target

        setStudent({ ...student, [name]: value })
    }

    // Handle form
    const handleStudentForm = (e) => {
        postStudentDataToServer(student)
        console.log(student)
        e.preventDefault();
    }

    // Post data handler
    const postStudentDataToServer = (data) => {
        axios.post(`${base_url_student}`, data).then(
            (response) => {
                console.log("data: ", response.data)
                window.location.reload()
                toast.success("Student Added Successfully", { position: "top-right" })
            },
            (error) => {
                console.log(error)
                toast.error("Something went wrong...", { position: "top-right" })
            }
        );
    }

    return (
        <div className='sign-up my-4'>
            {/* SignUp Form */}
            <div className='flex justify-center'>
                <form onSubmit={handleStudentForm} className="space-y-5" method="POST">

                    {/* Form Grids */}
                    <div className='flex flex-col justify-around items-center'>
                        {/* Layer-1 */}
                        <div className='flex mt-2'>

                            {/* Name */}
                            <div class="content-center">
                                <label for="name" class="form-label">
                                    Name
                                </label>
                                <input id='name' name="name" class="form-input" type="text" placeholder="Enter your name"
                                    onChange={handlechange} />
                            </div>

                            {/* RollNo */}
                            <div class="ml-8 content-center">
                                <label for="rollNo" class="form-label">
                                    RollNo
                                </label>
                                <input id='rollNo' name='rollNo' class="form-input" type="text" placeholder="Enter your RollNo" onChange={handlechange} />
                            </div>

                        </div>

                        {/* Layer-2 */}
                        <div className='flex mt-4'>
                            {/* Email */}
                            <div class="relative">
                                <label for='email' class="form-label">Email</label>
                                <input id='email' name='email' class="form-input" type="email" placeholder="Type your mail id" onChange={handlechange} />
                            </div>

                            {/* Password */}
                            <div class="ml-8 content-center">
                                <label for='password' class="form-label">
                                    Password
                                </label>
                                <input id='password' name='password' class="form-input" type="password" placeholder="Enter your password" onChange={handlechange} />
                            </div>
                        </div>

                        {/* Layer-3 */}
                        <div className='flex mt-4'>

                            {/* Enrollment */}
                            <div class="content-center">
                                <label for="enrollment" class="form-label">
                                    Enrollment
                                </label>
                                <input id='enrollment' name="enrollment" class="form-input" type="text" placeholder="Enter your Enrollment"
                                    onChange={handlechange} />
                            </div>

                            {/* Course */}
                            <div class="ml-8 content-center">
                                <label for="course" class="form-label">
                                    Course
                                </label>
                                <input id='course' name="course" class="form-input" type="text" placeholder="Enter your Course"
                                    onChange={handlechange} />
                            </div>
                        </div>

                        {/* layer-4 */}
                        <div className='w-full flex mt-4 space-x-12'>
                            {/* Semester */}
                            <div class="content-center">
                                <label for="semester" class="form-label">
                                    Semester
                                </label>
                                <input id='semester' name='semester' class="form-input" type="text" placeholder="Enter your Semester" onChange={handlechange} />
                            </div>

                            {/* Gender */}
                            <div className='gender flex justify-center items-center mt-4 space-x-4'>
                                {/* <span>Gender </span> */}
                                <div className='flex' >
                                    <input type="radio" name="gender" id="male" value="Male" onChange={handlechange} />
                                    <label className='px-2' for="male">Male</label>
                                </div>
                                <div className='flex'>
                                    <input type="radio" name="gender" id="female" value="Female" onChange={handlechange} />
                                    <label className='px-2' for="female">Female</label>
                                </div>
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

export default StudentSignUp