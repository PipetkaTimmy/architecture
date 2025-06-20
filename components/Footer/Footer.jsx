'use client';
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
              {(translations.Footer?.navigation.items || [
                'Главная',
                'О Кооперативе',
                'Новости',
                'Вопросы и ответы',
                'Контакты',
              ]).map((item, index) => (
                <li key={index}>{item}</li>
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