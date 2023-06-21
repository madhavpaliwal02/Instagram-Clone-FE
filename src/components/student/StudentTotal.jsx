import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { base_url_student } from '../../api/BootAPI';
import '../css/Table.css'
import { FaUserGraduate } from 'react-icons/fa'
import { MdDeleteSweep } from 'react-icons/md'
import { useDisclosure } from '@chakra-ui/react';
import StudentView from './StudentView';

const StudentTotal = () => {

    // Use state
    const [students, setStudents] = useState([

    ])

    // Use disclosure
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Use Effect
    useEffect(() => {
        getDataFromServer()
    }, [])

    // Handle Student Modal
    const handleView = (student) => {
        // localStorage.setItem("student", student)
        onOpen()
    }

    // Handle delete Student
    const deleteStudent = (id) => {
        axios.delete(`${base_url_student}/` + id).then(
            (response) => {
                console.log(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // Get Data from Server
    const getDataFromServer = () => {
        axios.get(`${base_url_student}`).then(
            (response) => {
                setStudents(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // Use Location
    const { state } = useLocation();
    const { title } = state;

    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic text-center items-center'>
                <p className='w-[40%] m-auto shadow-md shadow-black-500/30 py-2'>
                    {title === 'auth' ? "Total Students Authorized" : "Total Students Available"}
                </p>
            </div>

            <div className='tableFixHead w-[95%] border ml-5 mt-5'>
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr className=''>
                            <th className='tHead tracking-wider'>Name</th>
                            <th className='tHead tracking-wider'>Roll No</th>
                            <th className='tHead tracking-wider'>Course</th>
                            <th className='tHead tracking-wider'>Semester</th>
                            <th className='tHead tracking-wider'>Gender</th>
                            <th className='tHead tracking-wider'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 1, 1, 1, 1].map((s) =>
                                <tr>
                                    <td className='tBody'>{s.name}</td>
                                    <td className='tBody'>{s.rollNo}</td>
                                    <td className='tBody'>{s.course}</td>
                                    <td className='tBody'>{s.semester}</td>
                                    <td className='tBody'>{s.gender}</td>
                                    <td className='tBody'>
                                        <div className='flex justify-center items-center space-x-4'>
                                            {/* View Student Modal */}
                                            <div className='text-2xl cursor-pointer'>
                                                <FaUserGraduate onClick={() => handleView(s)} />
                                                <StudentView isOpen={isOpen} onClose={onClose} />
                                            </div>
                                            {/* Delete Student */}
                                            <div className='text-2xl cursor-pointer'>
                                                <MdDeleteSweep className='text-2xl' onClick={() => deleteStudent(s.stuId)} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentTotal