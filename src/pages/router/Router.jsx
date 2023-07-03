import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import Navbar from '../../components/navbar/Navbar'
import HomePage from '../home/HomePage'
import LibrarianHome from '../librarian/LibrarianHome'
import LibrarianRouter from '../librarian/LibrarianRouter'
import StudentHome from '../student/StudentHome';
import StudentRouter from '../student/StudentRouter';



const Router = () => {
    return (
        <div>
            <div className='top-0 sticky fixed' style={{ position: 'sticky', top: '0', zIndex: '1000', backgroundColor: '#ffffff' }}>

                <Navbar />
            </div>
            <div className='text-center'>
                <ToastContainer />
                <Routes>
                    {/* Home page */}
                    <Route path='/' element={<HomePage />} />

                    {/* Librarian */}
                    <Route path='/librarian' element={<LibrarianHome />} />
                    <Route path='/librarian/*' element={<LibrarianRouter />} />

                    {/* Student */}
                    <Route path='/student' element={<StudentHome />} />
                    <Route path='/student/*' element={<StudentRouter />} />
                </Routes>
            </div>
        </div>
    )
}

export default Router