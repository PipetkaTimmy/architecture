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
          throw new Error(translations.Counter?.error || 'РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РґР°РЅРЅС‹Рµ');
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
        {translations.Counter?.errorLabel || 'РћС€РёР±РєР°'}: {error}
      </div>
    );
  }

  const counterBlocks = [
    { key: 'block2.buyed_home', labelKey: 'boughtHomes', fallbackLabel: 'Приобрели жилье' },
    { key: 'block2.corp_users', labelKey: 'cooperativeMembers', fallbackLabel: 'Членов кооператива' },
    { key: 'block2.in_queue', labelKey: 'inQueue', fallbackLabel: 'В очереди' },
    { key: 'block2.redeemed', labelKey: 'redeemed', fallbackLabel: 'Выкупили' },
  ];

  const visibleBlocks = counterBlocks
    .map((config) => ({
      config,
      block: blocks.find((block) => block.key === config.key),
    }))
    .filter(({ block }) => block);

  return (
    <div className="counterComponent">
      {blocks.length > 0 ? (
        <>
          {visibleBlocks.map(({ config, block }) => (
            <div className="blackGlassBlock" key={config.key}>
              <span>{(language === 'kz' ? block.text_kz : block.text_ru) || '0'}+</span>
              <span>
                {translations.Counter?.[config.labelKey] || block.label || config.fallbackLabel}
              </span>
            </div>
          ))}
        </>
      ) : ( 
        <>
          <div className="blackGlassBlock">
            <span>{translations.Counter?.loading || 'Р—Р°РіСЂСѓР·РєР°...'}</span>
            <span>{translations.Counter?.loading || 'Р—Р°РіСЂСѓР·РєР°...'}</span>
          </div>
          <div className="blackGlassBlock">
            <span>{translations.Counter?.loading || 'Р—Р°РіСЂСѓР·РєР°...'}</span>
            <span>{translations.Counter?.loading || 'Р—Р°РіСЂСѓР·РєР°...'}</span>
          </div>
          <div className="blackGlassBlock">
            <span>{translations.Counter?.loading || 'Р—Р°РіСЂСѓР·РєР°...'}</span>
            <span>{translations.Counter?.loading || 'Р—Р°РіСЂСѓР·РєР°...'}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;


