import React from 'react'
import { Modal, ModalContent, ModalBody } from "@heroui/react";

const ModalComponent = ({ backdrop, isOpen, onClose, selectedImage }) => {
    return (
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} size='2xl'>
            <ModalContent>
                {(onClose) => (
                    <ModalBody>
                        <img src={selectedImage} alt="" />
                    </ModalBody>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent