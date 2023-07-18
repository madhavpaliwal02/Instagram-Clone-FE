import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LibrarianSidebar from '../../components/librarian/LibrarianSidebar'
import LibrarianPersonalDetails from '../../components/librarian/LibrarianPersonalDetails'
import StudentTotal from '../../components/student/StudentTotal'
import AddBook from '../../components/book/AddBook'
import BooksTotalAll from '../../components/book/BooksTotalAll'
import IssuedBookTotal from '../../components/issuedBook/IssuedBookTotal'
import LibrarianUpdate from '../../components/librarian/LibrarianUpdate'
import LibrarianTotal from '../../components/librarian/LibrarianTotal'
import BookUpdate from '../../components/book/BookUpdate'
import ReturnBookTotal from '../../components/returnBook/ReturnBookTotal'
import '../../components/librarian/Librarian.css'

const LibrarianRouter = () => {
    return (
        <div className='flex'>
            <div className='w-[30%] sidebar-content'>
                <LibrarianSidebar />
            </div>
            <div className='w-[90%] mt-5'>
                <Routes>
                    <Route path='/personal-details' element={<LibrarianPersonalDetails />} />
                    <Route path='/total-students' element={<StudentTotal />} />
                    <Route path='/total-students-auth' element={<StudentTotal />} />
                    <Route path='/add-book' element={<AddBook />} />
                    <Route path='/total-books' element={<BooksTotalAll />} />
                    <Route path='/total-books-issued' element={<IssuedBookTotal />} />
                    <Route path='/update' element={<LibrarianUpdate />} />
                    <Route path='/admin/total-librarians' element={<LibrarianTotal />} />
                    <Route path='/book-update' element={<BookUpdate />} />
                    <Route path='/total-books-return' element={<ReturnBookTotal />} />
                </Routes>
            </div>
        </div>
    )
}

export default LibrarianRouter