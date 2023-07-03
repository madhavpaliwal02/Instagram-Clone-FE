import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentPersonalDetails from '../../components/student/StudentPersonalDetails'
import StudentSidebar from '../../components/student/StudentSidebar'
import BooksTotal from '../../components/book/BooksTotal'
import StudentUpdate from '../../components/student/StudentUpdate'

const StudentRouter = () => {
    return (
        <div className='flex'>
            <div className='w-[30%]'>
                <StudentSidebar />
            </div>
            <div className='w-[90%] mt-5'>
                <Routes>
                    <Route path='/personal-details' element={<StudentPersonalDetails />} />
                    <Route path='/issued-books' element={<BooksTotal />} />
                    <Route path='/total-books' element={<BooksTotal />} />
                    <Route path='/update' element={<StudentUpdate />} />
                </Routes>
            </div>
        </div>
    )
}

export default StudentRouter