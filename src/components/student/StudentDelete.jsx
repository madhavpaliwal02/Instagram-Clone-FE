import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, Button, ModalFooter } from "@chakra-ui/react"


const StudentDelete = ({ isOpen, onClose, deleteStudent }) => {
    return (
        <div> <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Do you want to delete the librarian ?</ModalHeader>
                <ModalFooter>
                    <Button colorScheme="green" mr={3} onClick={deleteStudent}>
                        Yes
                    </Button>
                    <Button colorScheme="red" onClick={onClose}>
                        No
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal></div>
    )
}

export default StudentDelete