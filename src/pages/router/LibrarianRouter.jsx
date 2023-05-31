import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LibrarianSignIn from '../../components/librarian/LibrarianSignIn'
import LibrarianSignUp from '../../components/librarian/LibrarianSignUp'

const LibrarianRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/librarian/signin' element={<LibrarianSignIn />} />
                <Route path='/librarian/signup' element={<LibrarianSignUp />} />
            </Routes>
        </div>
    )
}

export default LibrarianRouter