'use client';
import React, { useState } from 'react';
import { Button } from '@heroui/button';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white">
            <div className="containerCustom navbar">
                <div className="navLogo">
                    <Link href="/">
                        <img src="/navbar/logo.jpg" alt="Logo" />
                    </Link>
                </div>
                <div className={`mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span className={`navigation-label ${isMobileMenuOpen ? 'visible' : ''}`}>
                        Навигация
                    </span>
                    <Button
                        isIconOnly
                        className={`mobile-menu-button ${isMobileMenuOpen ? 'grey' : 'orange'}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="hamburger-icon"></span>
                    </Button>

                </div>
                <ul className={`linksGroup ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                            О кооперативе
                        </Link>
                    </li>
                    <li>
                        <Link href="/news" onClick={() => setIsMobileMenuOpen(false)}>
                            Новости
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>
                            Вопросы и ответы
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                            Контакты
                        </Link>
                    </li>
                    <li>
                        <Link href="https://kz.bww.global/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="profileBtn">
                                <img src="/iconItems/user.png" alt="Profile" />
                                <span>Личный кабинет</span>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;