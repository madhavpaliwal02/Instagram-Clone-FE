import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader } from "@chakra-ui/react"
import { IoCloseSharp } from 'react-icons/io5'

const ViewBook = ({ isOpen, onClose, book }) => {

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
                                <div className='flex justify-left items-left text-2xl text-left font-semibold'>{book.title}</div>
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
                                <p className='ml-2 opacity-80'>{book.bookId}</p>
                            </div>

                            {/* Description */}
                            <div className='flex justify-center items-center'>
                                <p className='font-semibold'>Description :  </p>
                                <p className='ml-2 opacity-80'>{book.description}</p>
                            </div>

                            {/* Basic details */}
                            <div className='w-full flex justify-around items-center py-4' >
                                {/* Left */}
                                <div className='space-y-10 '>
                                    {/* AuthorName */}
                                    <div className='flex'>
                                        <p className='font-semibold'>AuthorName : </p>
                                        <p className='ml-2 opacity-80'>{book.authorName} </p>
                                    </div>
                                    {/* Genre */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Genre: </p>
                                        <p className='ml-2 opacity-80'>{book.genre}</p>
                                    </div>
                                    {/* Edition */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Edition: </p>
                                        <p className='ml-2 opacity-80'>{book.edition}</p>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='space-y-10 '>
                                    {/* Publication Year */}
                                    <div className='flex'>
                                        <p className='font-semibold'>Publication Year : </p>
                                        <p className='ml-2 opacity-80'>{book.publicationYear}</p>
                                    </div>
                                    {/* Pages */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Pages: </p>
                                        <p className='ml-2 opacity-80'>{book.pages}</p>
                                    </div>
                                    {/* Count */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Count: </p>
                                        <p className='ml-2 opacity-80'>{book.count}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Date */}
                            <div className='flex justify-center items-center mb-5'>
                                <p className='font-semibold'>Date : </p>
                                <p className='ml-2 opacity-80'>{book.date}</p>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ViewBook