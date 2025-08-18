'use client';
import { Button } from '@heroui/react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';
import Link from 'next/link';

const DescAbout = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('About', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  return (
    <div className='descComponent'>
      <h1>{translations.DescAbout?.title || 'О нашем потребительском кооперативе'}</h1>
      <h2>{translations.DescAbout?.subtitle || 'Надёжное сообщество членов кооперативов, строящее своё будущее'}</h2>
      <Link href="https://pkubw.kz">
        <Button className='lightBtn'>
          {translations.DescAbout?.button || 'Рассчет стоимости ОН'}
        </Button>
      </Link>
      <span className='text-white'>
        {translations.DescAbout?.note || '*ОН - объект недвижимости'}
      </span>
    </div>
  );
};

export default DescAbout;