import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { base_url_student } from '../../api/BootAPI'

const StudentUpdate = () => {

    // use state
    const [student, setStudent] = useState([])

    // const navigate
    const nav = useNavigate()

    const stuId = localStorage.getItem("stuId")

    // use effect
    useEffect(() => {
        fetchOldDataFromServer()
    }, [])

    // fetch old data
    const fetchOldDataFromServer = () => {
        axios.get(`${base_url_student}/${stuId}`).then(
            (response) => {
                setStudent(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // handle change
    const handlechange = (e) => {
        const { name, value } = e.target

        setStudent({ ...student, [name]: value })
    }

    // Handle form
    const handleStudentForm = (e) => {
        putStudentDataToServer(student)
        console.log(student)
        e.preventDefault();
    }

    // Update data handler
    const putStudentDataToServer = (data) => {
        axios.put(`${base_url_student}/${stuId}`, data).then(
            (response) => {
                console.log("data: ", response.data)
                nav("/student/personal-details")
                toast.success("Student Updated Successfully", { position: "top-right" })
            },
            (error) => {
                console.log(error)
                toast.error("Something went wrong...", { position: "top-right" })
            }
        );
    }

    const handleBack = () => {
        nav('/student/personal-details')
    }

    return (
        <div className='mt-6'>

            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Update Librarian</p>
            </div>

            {/* SignUp Form */}
            <div className='flex justify-center mt-6'>
                <form className="space-y-5" method="PUT">

                    {/* Form Grids */}
                    <div className='flex flex-col justify-around items-center'>
                        {/* Layer-1 */}
                        <div className='flex mt-2'>

                            {/* Name */}
                            <div class="content-center">
                                <label for="name" class="form-label">
                                    Name
                                </label>
                                <input value={student.name} id='name' name="name" class="form-input" type="text" placeholder="Enter your name"
                                    onChange={handlechange} />
                            </div>

                            {/* RollNo */}
                            <div class="ml-8 content-center">
                                <label for="rollNo" class="form-label">
                                    RollNo
                                </label>
                                <input value={student.rollNo} id='rollNo' name='rollNo' class="form-input" type="text" placeholder="Enter your RollNo" onChange={handlechange} />
                            </div>

                        </div>

                        {/* Layer-2 */}
                        <div className='flex mt-4'>
                            {/* Email */}
                            <div class="relative">
                                <label for='email' class="form-label">Email</label>
                                <input value={student.email} id='email' name='email' class="form-input" type="email" placeholder="Type your mail id" onChange={handlechange} />
                            </div>

                            {/* Password */}
                            <div class="ml-8 content-center">
                                <label for='password' class="form-label">
                                    Password
                                </label>
                                <input value={student.password} id='password' name='password' class="form-input" type="password" placeholder="Enter your password" onChange={handlechange} />
                            </div>
                        </div>

                        {/* Layer-3 */}
                        <div className='flex mt-4'>

                            {/* Enrollment */}
                            <div class="content-center">
                                <label for="enrollment" class="form-label">
                                    Enrollment
                                </label>
                                <input value={student.enrollment} id='enrollment' name="enrollment" class="form-input" type="text" placeholder="Enter your Enrollment"
                                    onChange={handlechange} />
                            </div>

                            {/* Course */}
                            <div class="ml-8 content-center">
                                <label for="course" class="form-label">
                                    Course
                                </label>
                                <input value={student.course} id='course' name="course" class="form-input" type="text" placeholder="Enter your Course"
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
                                <input value={student.semester} id='semester' name='semester' class="form-input" type="text" placeholder="Enter your Semester" onChange={handlechange} />
                            </div>

                            {/* Gender */}
                            <div className=' flex justify-center items-center mt-4 space-x-4'>
                                {/* <span>Gender </span> */}
                                <div className='flex' >
                                    <input type="radio" name="gender" id="male" value="Male" onChange={handlechange} checked={student.gender === 'Male'} />
                                    <label className='px-2' for="male">Male</label>
                                </div>
                                <div className='flex'>
                                    <input type="radio" name="gender" id="female" value="Female" onChange={handlechange} checked={student.gender === 'Female'} />
                                    <label className='px-2' for="female">Female</label>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div className='flex items-center justify-center space-x-8 mt-5'>
                        <button onClick={handleBack} type="reset" className="form-button">Back</button>
                        <button onClick={handleStudentForm} type="submit" className="form-button">Update</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default StudentUpdate