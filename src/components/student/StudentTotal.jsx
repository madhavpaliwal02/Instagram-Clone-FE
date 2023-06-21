import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { base_url_student } from '../../api/BootAPI';

const StudentTotal = () => {

    // Use state
    const [students, setStudents] = useState([

    ])

    const getStudentAPI = () => {
        axios.get(`${base_url_student}`).then(
            (response) => {
                setStudents(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        getStudentAPI()
    }, [])

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
                            <th className='tHead tracking-wider'>Id</th>
                            <th className='tHead tracking-wider'>Name</th>
                            <th className='tHead tracking-wider'>Email</th>
                            <th className='tHead tracking-wider'>Roll No</th>
                            <th className='tHead tracking-wider'>Enrollment</th>
                            <th className='tHead tracking-wider'>Course</th>
                            <th className='tHead tracking-wider'>Semester</th>
                            <th className='tHead tracking-wider'>Gender</th>
                            <th className='tHead tracking-wider'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((s) =>
                                <tr>
                                    <td className='tBody'>{s.stuId}</td>
                                    <td className='tBody'>{s.name}</td>
                                    <td className='tBody'>{s.email}</td>
                                    <td className='tBody'>{s.rollNo}</td>
                                    <td className='tBody'>{s.enrollment}</td>
                                    <td className='tBody'>{s.course}</td>
                                    <td className='tBody'>{s.semester}</td>
                                    <td className='tBody'>{s.gender}</td>
                                    <td className='tBody'>{s.date}</td>
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