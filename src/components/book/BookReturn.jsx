import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, Button, ModalFooter } from "@chakra-ui/react"


const BookReturn = ({ isOpen, onClose, returnBook }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Do you want to return the Book ?</ModalHeader>
                    <ModalFooter>
                        <Button colorScheme="green" mr={3} onClick={returnBook}>
                            Yes
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>
                            No
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default BookReturn