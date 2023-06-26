import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { base_url_book } from '../../api/BootAPI';
import { RiBook2Fill } from 'react-icons/ri'
import { MdDeleteSweep } from 'react-icons/md'
import BookView from './BookView';
import { useDisclosure } from '@chakra-ui/react';
import '../css/Table.css'
import { toast } from 'react-toastify';
import BookDelete from './BookDelete';

const BooksTotal = () => {

    // Use state
    const [books, setBooks] = useState([])
    const [book, setBook] = useState('')
    const [bookId, setBookId] = useState('')

    // Use Disclosure
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()


    // Handle view
    const handleView = (id) => {
        // console.log("id", id)
        fetchBookFromServer(id)
        onOpenView()
    }

    // Fetch book data from server
    const fetchBookFromServer = (id) => {
        axios.get(`${base_url_book}/` + id).then(
            (response) => {
                // console.log("book: ", response.data)
                setBook(response.data)
            },
            (error) => {

            }
        )
    }

    // handle close view
    const handleCloseView = () => {
        setBook('')
        onCloseView()
    }

    // use effect
    useEffect(() => {
        console.log("fetch")
        fetchBooksFromServer()
    }, []);

    // Fetch books from server
    const fetchBooksFromServer = () => {
        axios.get(`${base_url_book}`).then(
            (response) => {
                setBooks(response.data)
                console.log(books)
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
                window.location.reload();
                console.log(response.data)
                toast.success("Successfully Deleted the book...", { position: "top-right" })
            },
            (error) => {
                console.log(error)
                toast.error("Something went wrong...", { position: "top-right" })
            }
        )
    }

    // Use Location
    const { state } = useLocation();
    const { title } = state;


    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
                    {title === 'all' ? "Total Books Available" : "Total Books Issued"}
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
                    <tbody>
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
                                                <RiBook2Fill onClick={() => handleView(b.bookId)} />
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
        </div>
    )
}

export default BooksTotal