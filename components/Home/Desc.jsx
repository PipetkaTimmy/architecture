'use client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const Desc = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('Home', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  return (
    <div className='descComponent'>
      <h1>{translations.Desc?.title || 'UBW KZ — возможность стать владельцем недвижимости в любом регионе Казахстана, на выгодных условиях'}</h1>
      {/* <h2>{translations.Desc?.subtitle || 'Вступай в пай. Стань совладельцем. Живи или зарабатывай — выбор за тобой.'}</h2> */}
      <Link href="/about">
        <Button className='lightBtn'>
          {translations.Desc?.button || 'Узнать подробнее'}
        </Button>
      </Link>
    </div>
  );
};

export default Desc;