import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { base_url_book } from '../../api/BootAPI';
import { RiBook2Fill } from 'react-icons/ri'
import { MdDeleteSweep } from 'react-icons/md'
import BookView from './BookView';
import { useDisclosure } from '@chakra-ui/react';
import '../css/Table.css'

const BooksTotal = () => {

    // Use state
    const [books, setBooks] = useState([

    ])

    // Use Disclosure
    const { isOpen, onOpen, onClose } = useDisclosure()

    // useEffect
    useEffect(() => {
        fetchBooksFromServer()
    }, [])

    // Fetch data from server
    const fetchBooksFromServer = () => {
        axios.get(`${base_url_book}`).then(
            (response) => {
                setBooks(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // handle View
    const handleView = (book) => {
        // localStorage.setItem("book", book)
        onOpen()
    }

    // handle delete
    const deleteBook = (id) => {
        axios.delete(`${base_url_book}/` + id).then(
            (response) => {
                console.log(response.data)
            },
            (error) => {
                console.log(error)
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
                        {
                            [1, 1, 1, 1, 1].map((book) =>
                                <tr>
                                    <td className='tBody'>{book.title}</td>
                                    <td className='tBody'>{book.authorName}</td>
                                    <td className='tBody'>{book.genre}</td>
                                    <td className='tBody'>{book.edition}</td>
                                    <td className='tBody'>{book.publicationYear}</td>
                                    <td className='tBody'>{book.pages}</td>
                                    <td className='tBody'>
                                        <div className='flex justify-center items-center space-x-4'>
                                            {/* View Book Modal */}
                                            <div className='text-2xl cursor-pointer'>
                                                <RiBook2Fill onClick={() => handleView(book)} />
                                                <BookView isOpen={isOpen} onClose={onClose} />
                                            </div>
                                            {/* Delete Book */}
                                            <div className='text-2xl cursor-pointer'>
                                                <MdDeleteSweep className='text-2xl' onClick={() => deleteBook(book.bookId)} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BooksTotal