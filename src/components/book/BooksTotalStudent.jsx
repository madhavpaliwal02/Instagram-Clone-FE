import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { MdBookmarkAdd } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { base_url_book, base_url_issuedbook } from '../../api/BootAPI'
import BookView from './BookView';
import BookIssue from './BookIssue';

const BooksTotalStudent = () => {

    // Use state
    const [books, setBooks] = useState([])  // For all
    const [book, setBook] = useState('')    // For view book
    const [bookId, setBookId] = useState('') // For issue

    // useNavigate
    const nav = useNavigate()

    // Use Disclosure
    const { isOpen: isOpenIssue, onOpen: onOpenIssue, onClose: onCloseIssue } = useDisclosure()
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()

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

    // Getting libId - librarian
    const lId = localStorage.getItem("libId")
    // Getting stuId - student
    const sId = localStorage.getItem("stuId")

    // Handle open issue
    const handleOpenIssue = (bId) => {
        onOpenIssue()
        setBookId(bId)
    }

    // Handle issue book
    const handleIssued = () => {
        if (lId && sId && bookId) {

            const issuedBook = {
                libId: lId,  // Update the libId with the new value from localStorage
                stuId: sId,  // Update the stuId with the new value from localStorage
                bookId: bookId  // Update the bookId with the new value from localStorage
            }

            if (issuedBook) {
                console.log("Calling function ", issuedBook)
                issueBookByStudent(issuedBook)
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
        console.log("Function call ", data)
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
        onCloseIssue()
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

    useEffect(() => {
        fetchStudentAllUnIssuedBook()
    }, [])

    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
                    Total Books Available
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

                                            {/* Issue Modal */}
                                            < div className='text-2xl cursor-pointer'>
                                                <MdBookmarkAdd className='text-2xl' onClick={() => handleOpenIssue(b.bookId)} />
                                                <BookIssue isOpen={isOpenIssue} onClose={onCloseIssue} handleIssued={handleIssued} />
                                            </div>
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

export default BooksTotalStudent