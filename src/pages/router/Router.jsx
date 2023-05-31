import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LibrarianDashboard from '../../components/librarian/LibrarianDashboard'
import LibrarianHome from '../../components/librarian/LibrarianHome'
import Navbar from '../../components/navbar/Navbar'
import HomePage from '../home/HomePage'
import LibrarianRouter from './LibrarianRouter'

const Router = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='text-center'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/librarian' element={<LibrarianDashboard />} />
                    {/* <Route path='' element={ } /> */}
                </Routes>
            </div>
        </div>
    )
}

export default Router