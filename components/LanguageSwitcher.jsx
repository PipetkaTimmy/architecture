'use client';

import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from '@heroui/react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage(); // <--- вернули changeLanguage

  const languages = [
    { code: 'ru', name: 'Русский', flag: '/flags/rus.png' },
    { code: 'kz', name: 'Қазақша', flag: '/flags/kaz.png' },
  ];

  const selectedLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="language-switcher-trigger">
          <div className='langText'>
            <img
              src={selectedLanguage.flag}
              alt={`${selectedLanguage.name} flag`}
              className="flag-icon"
            />
            <span className="language-name">{selectedLanguage.name}</span>
          </div>
          <span className="language-arrow">▼</span>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language selection"
        onAction={(key) => changeLanguage(key)}
      >
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            startContent={
              <img
                src={lang.flag}
                alt={`${lang.name} flag`}
                className="flag-icon"
              />
            }
          >
            {lang.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
