import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HomePage from '../home/HomePage'
import LibrarianHome from '../librarian/LibrarianHome'
import LibrarianRouter from '../librarian/LibrarianRouter'

const Router = () => {
    return (
        <div>
            <div className='top-0 sticky fixed'>
                <Navbar />
            </div>
            <div className='text-center'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/librarian' element={<LibrarianHome />} />
                    {['/librarian/*', '/librarian/home'].map(path => <Route path={path} element={<LibrarianRouter />} />)}
                    {/* <Route path='/librarian/*' element={<LibrarianRouter />} /> */}
                    {/* <Route path='' element={ } /> */}
                </Routes>
            </div>
        </div>
    )
}

export default Router