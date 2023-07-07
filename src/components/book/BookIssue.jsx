import { Button, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const BookIssue = ({ onClose, isOpen, handleIssued }) => {
    return (
        <div>
            <Modal size={"2xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent className='mb-5'>
                    <ModalHeader>Do you want to Issue the Book ?</ModalHeader>
                    <ModalFooter>
                        <Button colorScheme="green" mr={3} onClick={handleIssued}>
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

export default BookIssue