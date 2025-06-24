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
    return (
      <div className="counterComponent">
        {translations.Counter?.errorLabel || 'Ошибка'}: {error}
      </div>
    );
  }

  // Находим блоки по ключам
  const boughtHomesBlock = blocks.find((block) => block.key === 'block2.buyed_home') || {};
  const cooperativeMembersBlock = blocks.find((block) => block.key === 'block2.corp_users') || {};
  const inQueueBlock = blocks.find((block) => block.key === 'block2.in_queue') || {};

  return (
    <div className="counterComponent">
      {blocks.length > 0 ? (
        <>
          <div className="blackGlassBlock">
            <span>{(language === 'kz' ? boughtHomesBlock.text_kz : boughtHomesBlock.text_ru) || '0'}+</span>
            <span>{translations.Counter?.boughtHomes || 'Приобрели жилье'}</span>
          </div>
          <div className="blackGlassBlock">
            <span>{(language === 'kz' ? cooperativeMembersBlock.text_kz : cooperativeMembersBlock.text_ru) || '0'}+</span>
            <span>{translations.Counter?.cooperativeMembers || 'Членов кооператива'}</span>
          </div>
          <div className="blackGlassBlock">
            <span>{(language === 'kz' ? inQueueBlock.text_kz : inQueueBlock.text_ru) || '0'}+</span>
            <span>{translations.Counter?.inQueue || 'В очереди'}</span>
          </div>
        </>
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