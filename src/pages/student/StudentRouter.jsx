import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentPersonalDetails from '../../components/student/StudentPersonalDetails'
import StudentSidebar from '../../components/student/StudentSidebar'
import StudentUpdate from '../../components/student/StudentUpdate'
import BooksTotalStudent from '../../components/book/BooksTotalStudent'
import BookIssuedStudent from '../../components/book/BookIssuedStudent'

const StudentRouter = () => {
    return (
        <div className='flex'>
            <div className='w-[30%]'>
                <StudentSidebar />
            </div>
            <div className='w-[90%] mt-5'>
                <Routes>
                    <Route path='/personal-details' element={<StudentPersonalDetails />} />
                    <Route path='/issued-books' element={<BookIssuedStudent />} />
                    <Route path='/total-books' element={<BooksTotalStudent />} />
                    <Route path='/update' element={<StudentUpdate />} />
                </Routes>
            </div>
        </div>
    )
}

export default StudentRouter