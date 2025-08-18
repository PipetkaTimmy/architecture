'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/button';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const context = useLanguage();
  const { language, setLanguage } = context || {};
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    console.log('Navbar: Context:', context);
    const fetchTranslations = async () => {
      const trans = await loadTranslations('Navbar', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!context || !setLanguage) {
    console.error('Navbar: Context or setLanguage is not available', { context, setLanguage });
  }

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
            {translations.Navbar?.navigation || 'Навигация'}
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
          <li className="language-switcher-item-mobile">
            <LanguageSwitcher />
          </li>
          <li className='navElement'>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              {translations.Navbar?.home || 'Главная'}
            </Link>
          </li>
          <li className='navElement'>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              {translations.Navbar?.about || 'О кооперативе'}
            </Link>
          </li>
          <li className='navElement'>
            <Link href="/news" onClick={() => setIsMobileMenuOpen(false)}>
              {translations.Navbar?.news || 'Новости'}
            </Link>
          </li>
          <li className='navElement'>
            <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>
              {translations.Navbar?.faq || 'Вопросы и ответы'}
            </Link>
          </li>
          <li className='navElement'>
            <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
              {translations.Navbar?.contacts || 'Контакты'}
            </Link>
          </li>
          <li className="language-switcher-item">
            <LanguageSwitcher />
          </li>
          <li>
            <Link href="https://pkubw.kz" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="profileBtn">
                <img src="/iconItems/user.png" alt="Profile" />
                <span>{translations.Navbar?.profile || 'Личный кабинет'}</span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;