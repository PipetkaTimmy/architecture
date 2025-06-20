'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const AboutComponent = () => {
  const [aboutText, setAboutText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('About', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  useEffect(() => {
    const fetchAboutText = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://admin.ubw.kz/api/site-texts/block1', {
          withCredentials: false,
          headers: {
            Accept: 'application/json',
          },
        });
        const { data } = response.data;
        const aboutUsText = data.find((item) => item.key === 'block1.about_us')?.[`text_${language}`] || data.find((item) => item.key === 'block1.about_us')?.text_ru || translations.AboutComponent?.error || 'Текст не найден';
        setAboutText(aboutUsText);
      } catch (err) {
        console.error('Axios error:', err);
        setError(err.message || translations.AboutComponent?.error || 'Ошибка при загрузке текста');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutText();
  }, [language, translations]);

  return (
    <section className="containerCustom p-21">
      <h2 className="sectionTitle">{translations.AboutComponent?.title || 'Коротко о нас'}</h2>
      <div className="aboutBlock">
        <div className="aboutBlockText">
          {loading ? (
            <div>{translations.AboutComponent?.loading || 'Загрузка...'}</div>
          ) : error ? (
            <div className="error">{translations.AboutComponent?.error || 'Ошибка'}: {error}</div>
          ) : (
            <div>{aboutText}</div>
          )}
          <div>{translations.AboutComponent?.mission || 'Мы объединяем усилия для реализации права казахстанцев на доступное жильё.'}</div>
        </div>
        <div className="aboutBlockImg">
          <img src="/aboutbaner.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;