import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { base_url_librarian } from '../../api/BootAPI'
import '../css/Table.css'
import { MdDeleteSweep } from 'react-icons/md'
import { useDisclosure } from '@chakra-ui/react'
import LibrarianDelete from './LibrarianDelete';

const LibrarianTotal = () => {

    // Use state
    const [librarians, setLibrarians] = useState([])
    const [libId, setLibId] = useState([])

    // Use disclosure
    const { isOpen, onOpen, onClose } = useDisclosure()


    // Fetch data from the server
    const fetchDataFromServer = () => {
        axios.get(`${base_url_librarian}`).then(
            (response) => {
                setLibrarians(response.data)
                // console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // delete a librarian
    const handledelete = (id) => {
        onOpen()
        setLibId(id)
    }

    // Delete a librarian from server
    const deleteLibrarian = () => {
        axios.delete(`${base_url_librarian}/${libId}`).then(
            (response) => {
                toast.success("Librarian Deleted Successfully", { position: "top-right" })
            },
            (error) => {
                toast.error("Something went wrong...", { position: "top-right" })
            }
        )
        // onClose()
    }

    // Use Effect
    useEffect(() => {
        fetchDataFromServer()
    }, [deleteLibrarian])


    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic text-center items-center'>
                <p className='w-[40%] m-auto shadow-md shadow-black-500/30 py-2'>
                    Total Librarians Available
                </p>
            </div>

            {/* Table */}
            <div className='tableFixHead w-[95%] border ml-5 mt-5'>
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr className=''>
                            <th className='tHead tracking-wider'>Name</th>
                            <th className='tHead tracking-wider'>Email</th>
                            <th className='tHead tracking-wider'>Contact</th>
                            <th className='tHead tracking-wider'>Gender</th>
                            <th className='w-[10%] tHead tracking-wider'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            librarians.map((l) =>
                                <tr>
                                    <td className='tBody'>{l.name}</td>
                                    <td className='tBody'>{l.email}</td>
                                    <td className='tBody'>{l.contact}</td>
                                    <td className='tBody'>{l.gender}</td>
                                    <td className='tBody'>
                                        <div className='flex justify-center items-center space-x-4'>
                                            {/* Delete Librarian */}
                                            <div className='text-2xl cursor-pointer'>
                                                <MdDeleteSweep className='text-2xl' onClick={() => handledelete(l.libId)} />
                                                <LibrarianDelete isOpen={isOpen} onClose={onClose} deleteLibrarian={deleteLibrarian} />
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

export default LibrarianTotal