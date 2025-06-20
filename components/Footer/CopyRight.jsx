'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const CopyRight = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('Footer', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  return (
    <div className="copyRight">
      <span>
        {translations.CopyRight?.rights || 'Все права на сайт принадлежат UWB.KZ, 2025'}
      </span>
      <span>
        {translations.CopyRight?.madeBy || 'Сделано в '}
        <span className="black">Spectrum Solution</span>
      </span>
    </div>
  );
};

export default CopyRight;