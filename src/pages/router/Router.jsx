import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HomePage from '../home/HomePage'
import LibrarianHome from '../librarian/LibrarianHome'
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
                    <Route path='/librarian' element={<LibrarianHome />} />
                    <Route path='/librarian/*' element={<LibrarianRouter />} />
                    {/* <Route path='' element={ } /> */}
                </Routes>
            </div>
        </div>
    )
}

export default Router