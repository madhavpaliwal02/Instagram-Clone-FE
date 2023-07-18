import React, { useEffect, useState } from 'react'
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../../components/css/Login.css'
import './HomePage.css'
import axios from 'axios'
import { base_url_book, base_url_issuedbook, base_url_librarian, base_url_student } from '../../api/BootAPI'

const HomePage = () => {

    // use state
    const [librarian, setLibrarian] = useState('')
    const [stuAll, setStuAll] = useState('')
    const [stuEnroll, setStuEnroll] = useState('')
    const [book, setBook] = useState('')
    const [issue, setIssue] = useState('')

    // Navigation
    const nav = useNavigate();

    // Handle Librarian 
    const handleLibrarian = () => {
        nav("/librarian");
    }

    // Handle Student
    const handleStudent = () => {
        nav("/student");
    }


    // GET COUNT of all modules
    const getAllLibrarians = () => {
        axios.get(`${base_url_librarian}/count`).then(
            (response) => {
                setLibrarian(response.data)
            }, (error) => { }
        )
    }

    const getAllStudentsAvail = () => {
        axios.get(`${base_url_student}/total/count`).then(
            (response) => {
                setStuAll(response.data)
            }, (error) => { }
        )
    }

    const getAllStudentsEnroll = () => {
        axios.get(`${base_url_student}/count`).then(
            (response) => {
                setStuEnroll(response.data)
            }, (error) => { }
        )
    }

    const getAllBooks = () => {
        axios.get(`${base_url_book}/count`).then(
            (response) => {
                setBook(response.data)
            }, (error) => { }
        )
    }

    const getAllIssuedBook = () => {
        axios.get(`${base_url_issuedbook}/count`).then(
            (response) => {
                setIssue(response.data)
            }, (error) => { }
        )
    }

    // Use State 
    useEffect(() => {
        getAllLibrarians()
        getAllStudentsAvail()
        getAllStudentsEnroll()
        getAllBooks()
        getAllIssuedBook()
    })


    // Statistics
    let stats = document.querySelectorAll('.stat');
    let interval = 5000;

    console.log("stats" + stats);

    return (
        <div className='content'>
            <div className='main-content'>

                {/* Librarian  */}
                <div onClick={handleLibrarian} className='border flex flex-col items-center rounded-tl-lg rounded-br-lg cursor-pointer bg-sky-300 px-3 py-2 shadow-lg shadow-black-600/50'>
                    <FaUserTie className='text-8xl pb-3' />
                    <button className='form-button'>Librarian</button>
                </div>

                {/* Student */}
                <div onClick={handleStudent} className='border flex flex-col items-center rounded-tl-lg rounded-br-lg cursor-pointer bg-sky-300 px-3 py-2 shadow-lg shadow-black-600/50'>
                    <FaUserGraduate className='text-8xl pb-3' />
                    <button className='form-button'>Student</button>
                </div>
            </div>

            <div className="stats">
                <div className="stats-box">
                    <p className="stat">{librarian}</p>
                    <p className="stat-name">Total Librarians</p>
                </div>
                <div className="stats-box">
                    <p className="stat">{stuAll}</p>
                    <p className="stat-name">Total Students Available</p>
                </div>
                <div className="stats-box">
                    <p className="stat">{stuEnroll}</p>
                    <p className="stat-name">Total Students Enrolled</p>
                </div>
                <div className="stats-box">
                    <p className="stat">{book}</p>
                    <p className="stat-name">Total Books Available</p>
                </div>
                <div className="stats-box">
                    <p className="stat">{issue}</p>
                    <p className="stat-name">Total Books Issued</p>
                </div>
            </div>

        </div>
    )
}

export default HomePage