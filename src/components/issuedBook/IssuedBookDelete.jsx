import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, Button, ModalFooter } from "@chakra-ui/react"


const IssuedBookDelete = ({ isOpen, onClose, deleteIssuedBook }) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Do you want to delete the IssuedBook ?</ModalHeader>
                    <ModalFooter>
                        <Button colorScheme="green" mr={3} onClick={deleteIssuedBook}>
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

export default IssuedBookDelete