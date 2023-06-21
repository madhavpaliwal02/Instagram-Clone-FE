import React, { useEffect, useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader } from "@chakra-ui/react"
import axios from 'axios'
import { base_url_book } from '../../api/BootAPI'
import { IoCloseSharp } from 'react-icons/io5'

const ViewBook = ({ onClose, isOpen }) => {

    // Use state
    const [book, setBook] = useState()

    // Getting id from local storage
    const id = localStorage.getItem('bookId')

    // Use effect
    useEffect(() => {
        fetchBookFromServer()
    }, [])

    // Fetch book from id
    const fetchBookFromServer = () => {
        axios.get(`${base_url_book}/${id}`).then(
            (response) => {
                console.log(response.data)
                setBook(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div className='w-full'>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent className='mb-5'>
                    {/* Book Title */}
                    <ModalHeader className='flex font-bold justify-around items-center mb-0'>
                        <div className='w-full flex justify-between'>
                            {/* Book Title */}
                            <div className='w-[95%] flex justify-center'>
                                <div className='flex justify-left items-left text-2xl text-left font-semibold'>Book Title</div>
                            </div>

                            {/* Close Modal */}
                            <div onClick={onClose} className='w-[5%] flex items-center justify-center text-xl cursor-pointer hover:text-2xl'>
                                <IoCloseSharp className='hover:shadow-md' />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        {/* All Details */}
                        <div>
                            {/* Id */}
                            <div className='flex font-semibold opacity-80 justify-end'>
                                <p className='font-semibold'>Id : </p>
                                <p className='ml-2 opacity-80'></p>
                            </div>

                            {/* Description */}
                            <div className='flex justify-center items-center'>
                                Description :  afknaegjdfkjfkagkljFKAFLKJDKFAKLDFJLKDFKDNVKDFLKNADKLFJKLDJFKLDJFKSJFGKaglkgangn
                            </div>

                            {/* Basic details */}
                            <div className='w-full flex justify-around items-center py-4' >
                                {/* Left */}
                                <div className='space-y-10 '>
                                    {/* AuthorName */}
                                    <div className='flex'>
                                        <p className='font-semibold'>AuthorName : </p>
                                        <p className='ml-2 opacity-80'></p>
                                    </div>
                                    {/* Genre */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Genre: </p>
                                        <p className='ml-2 opacity-80'></p>
                                    </div>
                                    {/* Edition */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Edition: </p>
                                        <p className='ml-2 opacity-80'></p>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='space-y-10 '>
                                    {/* Publication Year */}
                                    <div className='flex'>
                                        <p className='font-semibold'>Publication Year : </p>
                                        <p className='ml-2 opacity-80'></p>
                                    </div>
                                    {/* Pages */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Pages: </p>
                                        <p className='ml-2 opacity-80'></p>
                                    </div>
                                    {/* Count */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Count: </p>
                                        <p className='ml-2 opacity-80'></p>
                                    </div>
                                </div>
                            </div>
                            {/* Date */}
                            <div className='flex justify-center items-center mb-5'>
                                <p className='font-semibold'>Date : </p>
                                <p className='ml-2 opacity-80'></p>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ViewBook