'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const EventBlock = ({ id, title_ru, title_kz, subtitle_ru, subtitle_kz, image, date }) => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('News', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  const title = language === 'kz' ? title_kz : title_ru;
  const subtitle = language === 'kz' ? subtitle_kz : subtitle_ru;

  return (
    <Link href={`/fullnews?id=${id}`} className='eventWrapper'>
      <div className="eventBlock">
        <div className="eventImg">
          <img src={image} alt={title} />
        </div>
        <div className="eventTitle">{title}</div>
        <div className="eventDisc">{subtitle}</div>
        <div className="eventInfo">
          <span>{date}</span>
          <span className="eventLink">{translations.EventBlock?.readMore || 'Читать дальше'}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventBlock;