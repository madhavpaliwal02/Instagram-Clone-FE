import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader } from "@chakra-ui/react"
import { IoCloseSharp } from 'react-icons/io5'

const StudentView = ({ isOpen, onClose, student }) => {
    // console.log("student: ", student)

    return (
        <div>
            <div className='w-full'>
                <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent className='mb-5'>
                        {/* Student Name + Close */}
                        <ModalHeader className='flex font-bold justify-around items-center mb-0'>
                            <div className='w-full flex justify-between'>
                                {/* Student Name */}
                                <div className='w-[95%] flex justify-center'>
                                    <div className='flex justify-left items-left text-2xl text-left font-semibold'>{student.name}</div>
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
                                    <p className='ml-2 opacity-80'>{student.stuId}</p>
                                </div>

                                {/* Basic details */}
                                <div className='w-full flex justify-around items-center py-4' >
                                    {/* Left */}
                                    <div className='space-y-10 '>
                                        {/* Email */}
                                        <div className='flex'>
                                            <p className='font-semibold'>Email : </p>
                                            <p className='ml-2 opacity-80'>{student.email}</p>
                                        </div>
                                        {/* Roll No */}
                                        <div className='flex'>
                                            <p className='font-semibold' >Roll No : </p>
                                            <p className='ml-2 opacity-80'>{student.rollNo}</p>
                                        </div>
                                        {/* Enrollment */}
                                        <div className='flex'>
                                            <p className='font-semibold' >Enrollment : </p>
                                            <p className='ml-2 opacity-80'>{student.enrollment}</p>
                                        </div>
                                    </div>
                                    {/* Right */}
                                    <div className='space-y-10 '>
                                        {/* Course */}
                                        <div className='flex'>
                                            <p className='font-semibold'>Course : </p>
                                            <p className='ml-2 opacity-80'>{student.course}</p>
                                        </div>
                                        {/* Semester */}
                                        <div className='flex'>
                                            <p className='font-semibold' >Semester : </p>
                                            <p className='ml-2 opacity-80'>{student.semester}</p>
                                        </div>
                                        {/* Gender */}
                                        <div className='flex'>
                                            <p className='font-semibold' >Gender : </p>
                                            <p className='ml-2 opacity-80'>{student.gender}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Date */}
                                <div className='flex justify-center items-center mb-5'>
                                    <p className='font-semibold'>Date : </p>
                                    <p className='ml-2 opacity-80'>{student.date}</p>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default StudentView