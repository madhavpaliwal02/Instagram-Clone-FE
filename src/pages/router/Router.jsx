import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HomePage from '../home/HomePage'
import LibrarianHome from '../librarian/LibrarianHome'
import LibrarianRouter from '../librarian/LibrarianRouter'



const Router = () => {
    return (
        <div>
            <div className='top-0 sticky fixed' style={{ position: 'sticky', top: '0', zIndex: '1000', backgroundColor: '#ffffff' }}>

                <Navbar />
            </div>
            <div className='text-center'>
                <Routes>
                    {/* Home page */}
                    <Route path='/' element={<HomePage />} />

                    {/* Librarian */}
                    <Route path='/librarian' element={<LibrarianHome />} />
                    <Route path='/librarian/*' element={<LibrarianRouter />} />

                    {/* Student */}
                </Routes>
            </div>
        </div>
    )
}

export default Router