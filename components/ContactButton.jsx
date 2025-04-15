"use client"
import React, { useState } from 'react'
import { Button } from "@heroui/react";


const ContactButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);

    };

    return (
        <div className="menu-container">
            <div className='relative'>
                <Button className="fixBtn" isIconOnly onClick={toggleMenu}>
                    <img src="/messages.svg" alt="message" />
                </Button>
                {menuOpen && (
                    <div className="menu">
                        <a href="https://wa.me/77064213729" target="_blank">
                            <Button className="menuBtn" isIconOnly>
                                <img src="/wp.svg" alt="" />
                            </Button>
                        </a>
                        <a href="https://www.instagram.com/nomadstroy_project?igsh=MWRzZ3Yzbm9hcmEybg%3D%3D">
                            <Button className="menuBtn" isIconOnly>
                                <img src="/inst.svg" alt="" />
                            </Button>
                        </a>
                        <a href="tel:+77064213729">
                            <Button className="menuBtn" isIconOnly>
                                <img className='imgRotate' src="/phone.svg" alt="" />
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactButton