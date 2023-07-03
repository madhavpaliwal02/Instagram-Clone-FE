import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { base_url_student } from '../../api/BootAPI';

const StudentPersonalDetails = () => {

    // Use state
    const [student, setStudent] = useState('')

    // use navigate
    const nav = useNavigate();

    const stuId = localStorage.getItem("stuId");

    // use effect
    useEffect(() => {
        fetchStudentDataFromServer()
    }, [])

    // get student data from server
    const fetchStudentDataFromServer = () => {
        axios.get(`${base_url_student}/${stuId}`).then(
            (response) => {
                setStudent(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // update student handle
    const handleUpdateStudent = () => {
        nav("/student/update", { state: { update: 'update' } })
    }

    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Personal Details</p>
            </div>

            {/* Personal Details */}
            <div className='flex flex-col w-[95%] mx-auto justify-center items-center mt-12 border py-4 bg-wheat-200 shadow-lg shadow-black-300/50 hover:shadow-black-300/40'>

                {/* Header + Update */}
                <div className='w-full flex justify-between'>
                    {/* Personal Details : Header */}
                    <div className='w-[90%] flex justify-center'>
                        <div className='flex justify-left items-left text-2xl text-left font-semibold'>About Me</div>
                    </div>

                    {/* Update */}
                    <div onClick={handleUpdateStudent} className='w-[7%] flex items-center justify-center text-3xl cursor-pointer hover:text-2xl'>
                        <FaUserEdit className='hover:shadow-md' />
                    </div>
                </div>

                {/* Personal Details : Body */}
                <div className='w-full flex justify-around items-center mt-4 font-mono text-lg'>
                    {/* Left */}
                    <div className='space-y-10 '>
                        {/* Id */}
                        <div className='flex'>
                            <p className='font-semibold'>Id : </p>
                            <p className='ml-2 opacity-80'>{student.stuId}</p>
                        </div>
                        {/* Name */}
                        <div className='flex'>
                            <p className='font-semibold' >Name: </p>
                            <p className='ml-2 opacity-80'>{student.name}</p>
                        </div>
                        {/* Email */}
                        <div className='flex'>
                            <p className='font-semibold' >Email:</p>
                            <p className='ml-2 opacity-80'>{student.email}</p>
                        </div>
                        {/* Gender */}
                        <div className='flex'>
                            <p className='font-semibold' >Gender: </p>
                            <p className='ml-2 opacity-80'>{student.gender}</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='space-y-10'>
                        {/* Roll No. */}
                        <div className='flex'>
                            <p className='font-semibold' >Roll No: </p>
                            <p className='ml-2 opacity-80'>{student.rollNo}</p>
                        </div>
                        {/* Enrollment */}
                        <div className='flex'>
                            <p className='font-semibold' >Enrollment: </p>
                            <p className='ml-2 opacity-80'>{student.enrollment}</p>
                        </div>
                        {/* Course */}
                        <div className='flex'>
                            <p className='font-semibold' >Course: </p>
                            <p className='ml-2 opacity-80'>{student.course}</p>
                        </div>
                        {/* Semester */}
                        <div className='flex'>
                            <p className='font-semibold' >Semester: </p>
                            <p className='ml-2 opacity-80'>{student.semester}</p>
                        </div>

                    </div>
                </div>
                {/* Date */}
                <div className='w-full flex justify-around items-center'>
                    <div className='flex'>
                        <p className='font-semibold' >Date:</p>
                        <p className='ml-2 opacity-80'>{student.date}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default StudentPersonalDetails