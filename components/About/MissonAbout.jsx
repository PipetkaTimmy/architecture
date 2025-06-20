'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const MissonAbout = () => {
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
    <section className='containerCustom p-21'>
      <h2 className='sectionTitle'>
        {translations.MissonAbout?.title || 'МИССИЯ ПК «UBW KZ»'}
      </h2>
      <div className='aboutBlock'>
        <div className='aboutBlockText'>
          <div>
            {translations.MissonAbout?.text1 ||
              'Социальная миссия Потребительского кооператива «UBW KZ» совпадает с целями государственной политики в обеспечении реализации конституционного права граждан Республики Казахстан на жилье.'}
          </div>
          <div>
            {translations.MissonAbout?.text2 ||
              'Согласно статье 40 Закона Республики Казахстан «О некоммерческих организациях» «Государство поощряет формирование и активную деятельность некоммерческих организаций». В настоящее время ПК «UBW KZ» имеет более 10 лет опыта успешной работы. И мы открыты к тому, чтобы благодаря нашему положительному опыту становилось все больше и больше счастливых обладателей квартир.'}
          </div>
        </div>
        <div className='aboutBlockImg'>
          <img src="/aboutbaner2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default MissonAbout;