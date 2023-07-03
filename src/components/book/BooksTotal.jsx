import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { base_url_book, base_url_issuedbook, base_url_student } from '../../api/BootAPI';
import { MdBookmarkAdd, MdBookmarkRemove, MdDeleteSweep } from 'react-icons/md'
import BookView from './BookView';
import { useDisclosure } from '@chakra-ui/react';
import '../css/Table.css'
import { toast } from 'react-toastify';
import BookDelete from './BookDelete';
import { FaBookOpen } from 'react-icons/fa';

const BooksTotal = () => {

    // Use state
    const [books, setBooks] = useState([])  // For all
    const [book, setBook] = useState('')    // For view book
    const [bookId, setBookId] = useState('')    // For Delete
    const [iBook, setIBook] = useState({
        libId: '',
        stuId: '',
        bookId: ''
    });

    // Use Disclosure
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()

    // useNavigate
    const nav = useNavigate()

    // Handle view
    const handleView = (data) => {
        setBook(data)
        onOpenView()
    }

    // handle close view
    const handleCloseView = () => {
        setBook('')
        onCloseView()
    }


    /* Librarian/admin access */

    // Use Disclosure
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    // Fetch books from server
    const fetchAllBooksFromServer = () => {
        axios.get(`${base_url_book}`).then(
            (response) => {
                setBooks(response.data)
                // console.log(books)
            },
            (error) => {

            }
        )
    }

    // handle delete
    const handleDelete = (data) => {
        onOpenDelete()
        setBookId(data)
    }

    // handle delete
    const deleteBook = () => {
        axios.delete(`${base_url_book}/${bookId}`).then(
            (response) => {
                // window.location.reload();
                console.log(response.data)
                toast.success("Successfully Deleted the book...", { position: "top-right" })
            },
            (error) => {
                console.log(error)
                toast.error("Something went wrong...", { position: "top-right" })
            }
        )
    }




    /* Student access */

    // Getting role - student
    // const student = localStorage.getItem("role")
    // Getting libId - librarian
    const lId = localStorage.getItem("libId")
    // 
    // Getting stuId - student
    const sId = localStorage.getItem("stuId")
    // 

    // handle issue book
    const handleIssued = (bId) => {
        if (lId && sId && bId) {
            console.log("libId: ", lId)
            console.log("stuId: ", sId)
            console.log("bookId: ", bId)
            setIBook({
                ...iBook,  // Copy the existing values of iBook
                libId: lId,  // Update the libId with the new value from localStorage
                stuId: sId,  // Update the stuId with the new value from localStorage
                bookId: bId  // Update the bookId with the new value from localStorage
            });
            console.log("setI ", iBook)
            if (iBook) {
                issueBookByStudent(iBook)
            } else {
                console.log("Records not initialized..")
            }
        }
        else {
            nav('/student/personal-details')
            toast.error("No librarian available", { position: "top-right" })
        }
    }

    // issued a Book for student
    const issueBookByStudent = (data) => {
        console.log("setI ", data)
        axios.post(`${base_url_issuedbook}`, data).then(
            (response) => {
                console.log(response.data)
                nav('/student/issued-books')
                toast.success("Successfully Issued Book", { position: "top-right" })
            },
            (error) => {
                toast.error("Something went wrong...", { position: "top-right" })
            }
        )
    }

    // handle return book
    // const handleReturn = (bId)

    // Return a book

    // Fetch all issued book for a student
    const fetchStudentIssuedBook = () => {
        axios.get(`${base_url_student}/my-books/${sId}`).then(
            (response) => {
                setBooks(response.data)
            },
            (error) => { }
        )
    }

    // Fetch all un-issued book for a student
    const fetchStudentAllUnIssuedBook = () => {
        axios.get(`${base_url_book}`).then(
            (response) => {
                setBooks(response.data)
            },
            (error) => { }
        )
    }

    // useLocation
    const { state } = useLocation();
    const { title } = state;
    // console.log("title", title)

    // use effect
    useEffect(() => {
        if (title === 'student-issued') {
            fetchStudentIssuedBook()
        }
        else if (title === 'student-all') {
            fetchStudentAllUnIssuedBook()
        }
        else {
            fetchAllBooksFromServer()
        }
    }, []);


    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
                    {title === 'student-issued' ? "Total Books Issued" : "Total Books Available"}
                </p>
            </div>

            {/* Table */}
            <div className='tableFixHead w-[95%]  ml-5 mt-5'>
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr className=''>
                            <th className='tHead tracking-wider'>Title</th>
                            <th className='tHead tracking-wider'>Author's Name</th>
                            <th className='tHead tracking-wider'>Genre</th>
                            <th className='tHead tracking-wider'>Edition</th>
                            <th className='tHead tracking-wider'>Publication Year</th>
                            <th className='tHead tracking-wider'>Pages</th>
                            <th className='tHead tracking-wider'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {(books.length > 0) ?
                            books.map((b) =>
                                <tr>
                                    <td className='tBody'>{b.title}</td>
                                    <td className='tBody'>{b.authorName}</td>
                                    <td className='tBody'>{b.genre}</td>
                                    <td className='tBody'>{b.edition}</td>
                                    <td className='tBody'>{b.publicationYear}</td>
                                    <td className='tBody'>{b.pages}</td>
                                    <td className='tBody'>
                                        <div className='flex justify-center items-center space-x-4'>
                                            {/* View Book Modal */}
                                            <div className='text-2xl cursor-pointer'>
                                                <FaBookOpen onClick={() => handleView(b)} />
                                                <BookView isOpen={isOpenView} onClose={handleCloseView} book={book} />
                                            </div>

                                            {(title === "student-all") ? (
                                                //  Issued Book 
                                                < div className='text-2xl cursor-pointer'>
                                                    <MdBookmarkAdd className='text-2xl' onClick={() => handleIssued(b.bookId)} />
                                                </div>
                                            ) : (title === "student-issued") ? (
                                                // Return Book 
                                                < div className='text-2xl cursor-pointer'>
                                                    <MdBookmarkRemove className='text-2xl' />
                                                </div>
                                            ) : //  Delete Book
                                                <div className='text-2xl cursor-pointer'>
                                                    <MdDeleteSweep className='text-2xl' onClick={() => handleDelete(b.bookId)} />
                                                    <BookDelete isOpen={isOpenDelete} onClose={onCloseDelete} deleteBook={deleteBook} />
                                                </div>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )
                            : <div></div>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default BooksTotal