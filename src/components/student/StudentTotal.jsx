import React from 'react'
import { useLocation } from 'react-router-dom'

const StudentTotal = () => {

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
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) =>
                                <tr>
                                    <td className='tBody'>Id</td>
                                    <td className='tBody'>Name</td>
                                    <td className='tBody'>Email</td>
                                    <td className='tBody'>Roll No</td>
                                    <td className='tBody'>Enrollment</td>
                                    <td className='tBody'>Course</td>
                                    <td className='tBody'>Semester</td>
                                    <td className='tBody'>Gender</td>
                                    <td className='tBody'>Date</td>
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