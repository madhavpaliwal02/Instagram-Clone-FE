import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { base_url_book, base_url_student } from '../../api/BootAPI';
import { MdDeleteSweep } from 'react-icons/md'
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

    // Use Disclosure
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()

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

    // use effect
    useEffect(() => {
        fetchAllBooksFromServer()
    }, []);


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

                                            {/* Delete Book */}
                                            <div className='text-2xl cursor-pointer'>
                                                <MdDeleteSweep className='text-2xl' onClick={() => handleDelete(b.bookId)} />
                                                <BookDelete isOpen={isOpenDelete} onClose={onCloseDelete} deleteBook={deleteBook} />
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

export default BooksTotal