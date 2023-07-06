import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader } from "@chakra-ui/react"
import { IoCloseSharp } from 'react-icons/io5'

const IssuedIssuedBookView = ({ onClose, isOpen, issuedBook }) => {

    return (
        <div className='w-full'>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent className='mb-5'>
                    {/* IssuedBook Title */}
                    <ModalHeader className='flex font-bold justify-around items-center mb-0'>
                        <div className='w-full flex justify-between'>
                            {/* IssuedBook Title */}
                            <div className='w-[95%] flex justify-center'>
                                <div className='flex justify-left items-left text-2xl text-left font-semibold'>{issuedBook.title}</div>
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
                                <p className='ml-2 opacity-80'>{issuedBook.ibookId}</p>
                            </div>

                            {/* Basic details */}
                            <div className='w-full flex justify-around items-center py-4' >
                                {/* Left */}
                                <div className='space-y-10 '>
                                    {/* Student Name */}
                                    <div className='flex'>
                                        <p className='font-semibold'>Student Name : </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.sname}</p>
                                    </div>
                                    {/* Course */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Course: </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.course}</p>
                                    </div>
                                    {/* AuthorName */}
                                    <div className='flex'>
                                        <p className='font-semibold'>AuthorName : </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.authorName}</p>
                                    </div>
                                    {/* Librarian Name */}
                                    <div className='flex'>
                                        <p className='font-semibold'>Librarian Name : </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.lname}</p>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='space-y-10 '>
                                    {/* Roll No */}
                                    <div className='flex'>
                                        <p className='font-semibold'>Roll No : </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.rollNo}</p>
                                    </div>
                                    {/* Gender */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Gender: </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.sgender}</p>
                                    </div>
                                    {/* Edition */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Edition: </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.edition}</p>
                                    </div>
                                    {/* Gender */}
                                    <div className='flex'>
                                        <p className='font-semibold' >Gender: </p>
                                        <p className='ml-2 opacity-80'>{issuedBook.lgender}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Date */}
                            <div className='flex justify-center items-center mb-5'>
                                <p className='font-semibold'>Date : </p>
                                <p className='ml-2 opacity-80'>{issuedBook.date}</p>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default IssuedIssuedBookView