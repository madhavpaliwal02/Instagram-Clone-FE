import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url_returnbook, base_url_librarian } from '../../api/BootAPI'
import '../css/Table.css'
import { RiBook2Fill } from 'react-icons/ri'
import { MdDeleteSweep } from 'react-icons/md'
import { useDisclosure } from '@chakra-ui/react';
import ReturnBookView from './ReturnBookView'
import ReturnBookDelete from './ReturnBookDelete'
import { toast } from 'react-toastify'

const ReturnBookTotal = () => {

    // Use state
    const [returnBooks, setReturnBooks] = useState([])
    const [returnBook, setReturnBook] = useState('')
    const [rbookId, setRbookId] = useState('')

    // Use disclosure
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    // Getting form local storage
    const role = localStorage.getItem("role")
    const libId = localStorage.getItem("libId")

    // Fetch the data from server
    const fetchReturnBooksFromServer = () => {
        axios.get(`${base_url_returnbook}`).then(
            (response) => {
                console.log(response.data)
                setReturnBooks(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // Fetch data for librarian
    const fetchReturnBookLibrarian = (id) => {
        axios.get(`${base_url_returnbook}/librarian/` + id).then(
            (response) => {
                setReturnBooks(response.data)
            },
            (error) => { }
        )
    }

    // Handle ReturnBook View Modal
    const handleView = (data) => {
        setReturnBook(data)
        onOpenView()
    }

    // handle close view
    const handleCloseView = () => {
        setReturnBook('')
        onCloseView()
    }

    // Handle ReturnBook Delete Modal
    const handleDelete = (id) => {
        setRbookId(id)
        onOpenDelete()
    }

    // Delete the data from server
    const deleteReturnBook = () => {
        axios.delete(`${base_url_returnbook}/${rbookId}`).then(
            (response) => {
                console.log(response.data)
                window.location.reload()
                toast.success("Successfully Deleted the ReturnBook...", { position: "top-right" })
            },
            (error) => {
                console.log(error)
                toast.error("Something went wrong...", { position: "top-right" })
                onCloseDelete()
            }
        )
    }

    // UseEffect
    useEffect(() => {
        if (role === "admin") {
            fetchReturnBooksFromServer()
        } else {
            fetchReturnBookLibrarian(libId)
        }
    }, [])


    return (
        <div>
            <div className='text-3xl italic flex justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Total Return Books</p>
            </div>

            <div className='tableFixHead w-[95%] border ml-5 mt-5'>
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className='tHead tracking-wider'>Student's Name</th>
                            <th className='tHead tracking-wider'>Roll No</th>
                            <th className='tHead tracking-wider'>Book's Title</th>
                            <th className='tHead tracking-wider'>Author's Name</th>
                            {(role === "admin") ?
                                <th className='tHead tracking-wider'>Librarian Name</th> : <div></div>
                            }
                            <th className='tHead tracking-wider'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            returnBooks.map((rb) =>
                                <tr>
                                    <td className='tBody'>{rb.sname}</td>
                                    <td className='tBody'>{rb.rollNo}</td>
                                    <td className='tBody'>{rb.title}</td>
                                    <td className='tBody'>{rb.authorName}</td>
                                    {(role === "admin") ?
                                        <td className='tBody'>{rb.lname}</td> : <div></div>
                                    }
                                    <td className='tBody'>
                                        <div className='flex justify-center items-center space-x-4'>
                                            {/* View ReturnBook Modal */}
                                            <div className='text-2xl cursor-pointer'>
                                                <RiBook2Fill onClick={() => handleView(rb)} />
                                                <ReturnBookView isOpen={isOpenView} onClose={handleCloseView} returnBook={returnBook} />
                                            </div>
                                            {/* Delete ReturnBook */}
                                            {(role === "admin") ?
                                                < div className='text-2xl cursor-pointer'>
                                                    <MdDeleteSweep className='text-2xl' onClick={() => handleDelete(rb.rbookId)} />
                                                    <ReturnBookDelete isOpen={isOpenDelete} onClose={onCloseDelete} deleteReturnBook={deleteReturnBook} />
                                                </div> : <div></div>
                                            }

                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ReturnBookTotal