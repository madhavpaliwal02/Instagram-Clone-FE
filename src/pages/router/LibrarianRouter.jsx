import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LibrarianSidebar from '../../components/librarian/LibrarianSidebar'
import LibrarianSignUp from '../../components/librarian/LibrarianSignUp'
import LibrarianPersonalDetails from '../librarian/LibrarianPersonalDetails'

const LibrarianRouter = () => {
    return (
        <div className='flex'>
            <div className='w-[30%] border border-l-slate-500'>
                <LibrarianSidebar />
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path='/personal-details' element={<LibrarianPersonalDetails />} />
                    {/* <Route path='/librarian/signup' element={<LibrarianSignUp />} /> */}
                </Routes>
            </div>
        </div>
    )
}

export default LibrarianRouter