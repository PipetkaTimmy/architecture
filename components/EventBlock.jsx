'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const EventBlock = ({ id, title, subtitle, image, date }) => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('News', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  return (
    <div className='eventBlock'>
      <div className='eventImg'>
        <img src={image} alt={title} />
      </div>
      <div className='eventTitle'>{title}</div>
      <div className='eventDisc'>{subtitle}</div>
      <div className='eventInfo'>
        <span>{date}</span>
        <Link href={`/fullnews?id=${id}`}>
          <span className='eventLink'>{translations.EventBlock?.readMore || 'Читать дальше'}</span>
        </Link>
      </div>
    </div>
  );
};

export default EventBlock;