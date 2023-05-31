import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LibrarianSidebar from '../../components/librarian/LibrarianSidebar'
import BooksTotal from '../book/BooksTotal'
import IssuedBookTotal from '../issuedBook/IssuedBookTotal'
import LibrarianPersonalDetails from '../librarian/LibrarianPersonalDetails'
import StudentTotal from '../student/StudentTotal'

const LibrarianRouter = () => {
    return (
        <div className='flex'>
            <div className='w-[30%] border border-l-slate-500'>
                <LibrarianSidebar />
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path='/personal-details' element={<LibrarianPersonalDetails />} />
                    <Route path='/total-students' element={<StudentTotal />} />
                    <Route path='/total-books' element={<BooksTotal />} />
                    <Route path='/total-students-book-issued' element={<IssuedBookTotal />} />
                </Routes>
            </div>
        </div>
    )
}

export default LibrarianRouter