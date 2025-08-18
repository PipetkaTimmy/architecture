'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import FooterNews from './FooterNews';
import CopyRight from './CopyRight';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const Footer = () => {
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
    <footer className="containerCustom">
      <div className="footerWrapper">
        <div className="footerTextWrapper">
          <div className="footerText">
            <h2>{translations.Footer?.about.title || 'О кооперативе'}</h2>
            <span>
              {translations.Footer?.about.description ||
                'Мы более 10 лет помогаем гражданам нашей страны приобретать жилье. Мы работаем в соответствии с требованиями закона, прозрачно и открыто.'}
            </span>
          </div>
          <div className="footerText">
            <h2>{translations.Footer?.navigation.title || 'Навигация'}</h2>
            <ul>
              {(translations.Footer?.navigation.items || []).map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerText">
            <h2>{translations.Footer?.schedule.title || 'График'}</h2>
            <ul>
              <li>
                <b>{translations.Footer?.schedule.workdays.title || 'Рабочие дни'}</b>
                <p>{translations.Footer?.schedule.workdays.days || 'ПН - ПТ'}</p>
                <p>{translations.Footer?.schedule.workdays.hours || 'с 09:00 до 18:00'}</p>
              </li>
              <li>
                <b>{translations.Footer?.schedule.breakfast.title || 'Обед'}</b>
                <p>{translations.Footer?.schedule.breakfast.hours || 'с 13:00 до 14:00'}</p>
              </li>
              <li>
                <b>{translations.Footer?.schedule.weekends.title || 'Выходные дни'}</b>
                <p>{translations.Footer?.schedule.weekends.days || 'СБ - ВС'}</p>
              </li>
            </ul>
          </div>
        </div>
        <FooterNews />
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;