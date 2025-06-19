'use client'
import React, { useState } from 'react'

import { useDisclosure, Button } from "@heroui/react";
import ModalDocs from './ModalDocs';

const MissionDocs = () => {

    const [selectedImage, setSelectedImage] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState('blur')

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        onOpen();
    }

    return (
        <div className='missionDocs'>
            <div className='docsImages'>
                <Button className="imgButton"><img src="/docs/1.png" alt="" onClick={() => handleImageClick('/docs/1.png')} /></Button>
                <Button className="imgButton"><img src="/docs/2.png" alt="" onClick={() => handleImageClick('/docs/2.png')} /></Button>
            </div>
            <ModalDocs backdrop={backdrop} isOpen={isOpen} onClose={onClose} selectedImage={selectedImage} />
        </div>
    )
}

export default MissionDocs