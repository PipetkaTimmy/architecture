import React, { useState } from 'react'
import styles from './licenses.module.css';
import { useDisclosure, Button } from "@nextui-org/react";
import ModalComponent from './Modal';


const Licenses = () => {
    const [selectedImage, setSelectedImage] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState('blur')

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        onOpen();
    }

    return (
        <section className='container' id='licenses'>
            <h1 className='title colorBlack'>Лицензии</h1>
            <div className={styles.licensesContainer}>
                <Button className={styles.imgButton}><img src="/license_img/1.png" alt="" onClick={() => handleImageClick('/license_img/1.png')} /></Button>
                <Button className={styles.imgButton}><img src="/license_img/2.png" alt="" onClick={() => handleImageClick('/license_img/2.png')} /></Button>
                <Button className={styles.imgButton}><img src="/license_img/3.png" alt="" onClick={() => handleImageClick('/license_img/3.png')} /></Button>
                <Button className={styles.imgButton}><img src="/license_img/4.png" alt="" onClick={() => handleImageClick('/license_img/4.png')} /></Button>
            </div>
            <ModalComponent backdrop={backdrop} isOpen={isOpen} onClose={onClose} selectedImage={selectedImage} />
        </section>
    )
}

export default Licenses
