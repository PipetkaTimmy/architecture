'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const MissionText = () => {
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
    <div className='missionBlock'>
      <p>
        {translations.MissionText?.text ||
          'Социальная миссия Потребительского кооператива «UBW KZ» совпадает с целями государственной политики в обеспечении реализации конституционного права граждан Республики Казахстан на жилье.'}
      </p>
      <div className='missionAutor'>
        <span>{translations.MissionText?.author?.position || 'Председатель Правления'}</span>
        <span>{translations.MissionText?.author?.company || 'UWB.kz'}</span>
      </div>
    </div>
  );
};

export default MissionText;