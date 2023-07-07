import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { MdBookmarkRemove } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { base_url_returnbook, base_url_student } from '../../api/BootAPI'
import BookView from './BookView';
import { toast } from 'react-toastify'
import BookReturn from './BookReturn'

const IssuedBookStudent = () => {

    // Use state
    const [books, setBooks] = useState([])  // For all
    const [book, setBook] = useState('')    // For view book
    const [bookId, setBookId] = useState('') // For return

    // useNavigate
    const nav = useNavigate()

    // Use Disclosure
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenReturn, onOpen: onOpenReturn, onClose: onCloseReturn } = useDisclosure()

    // Getting stuId - student
    const sId = localStorage.getItem("stuId")

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

    // handle return book
    const handleReturn = (bId) => {
        setBookId(bId)
        onOpenReturn();
    }

    // Return a book
    const returnBook = () => {
        axios.post(`${base_url_returnbook}/${bookId}`,).then(
            (response) => {
                console.log("ReturnBook: ", response.data)
                window.location.reload()
                toast.success("Book Returned Successfully...", { position: "top-right" })
            }, (error) => {
                console.log(error)
                toast.error("Something went wrong...", { position: "top-right" })
            }
        )
        onCloseReturn()
    }

    // Fetch all issued book for a student
    const fetchStudentIssuedBook = () => {
        axios.get(`${base_url_student}/my-books/${sId}`).then(
            (response) => {
                setBooks(response.data)
                console.log("books ", response.data)
            },
            (error) => { }
        )
    }

    useEffect(() => {
        fetchStudentIssuedBook()
    }, [])

    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
                    Total Books Issued
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

                                            {/* Return Book  */}
                                            < div className='text-2xl cursor-pointer'>
                                                <MdBookmarkRemove className='text-2xl' onClick={() => handleReturn(b.bookId)} />
                                                <BookReturn isOpen={isOpenReturn} onClose={onCloseReturn} returnBook={returnBook} />
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

export default IssuedBookStudent