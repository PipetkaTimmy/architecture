'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const Counter = () => {
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState(null);
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('Home', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.ubw.kz/api/site-texts/block2');
        if (!response.ok) {
          throw new Error(translations.Counter?.error || 'Не удалось загрузить данные');
        }
        const data = await response.json();
        setBlocks(data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [translations]);

  if (error) {
    return <div className="counterComponent">{translations.Counter?.errorLabel || 'Ошибка'}: {error}</div>;
  }

  return (
    <div className="counterComponent">
      {blocks.length > 0 ? (
        blocks.map((block) => (
          <div key={block.id} className="blackGlassBlock">
            <span>{block.text_ru}+</span> {/* Если есть text_kz, можно добавить условие */}
            <span>{block.label}</span>
          </div>
        ))
      ) : (
        <>
          <div className="blackGlassBlock">
            <span>{translations.Counter?.loading || 'Загрузка...'}</span>
            <span>{translations.Counter?.loading || 'Загрузка...'}</span>
          </div>
          <div className="blackGlassBlock">
            <span>{translations.Counter?.loading || 'Загрузка...'}</span>
            <span>{translations.Counter?.loading || 'Загрузка...'}</span>
          </div>
          <div className="blackGlassBlock">
            <span>{translations.Counter?.loading || 'Загрузка...'}</span>
            <span>{translations.Counter?.loading || 'Загрузка...'}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;