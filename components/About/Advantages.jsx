'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const Advantages = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('About', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  const advantages = translations.Advantages?.items || [
    { title: "Документы:", description: "только Удостоверение личности" },
    { title: "Рассрочка:", description: "до 10-ти лет" },
    { title: "Первоначальный взнос:", description: "от 35% от стоимости квартиры" },
    { title: "Приобретение квартиры:", description: "В порядке очереди" },
    { title: "Выплаты:", description: "без кредитной истории" },
    { title: "Рассчет стоимости ОН", description: "" },
    { title: "Минимальная переплата:", description: "0%" },
    { title: "Подтверждение доходов:", description: "Не требуется" }
  ];

  return (
    <section className='containerCustom p-21'>
      <h2 className='sectionTitle'>
        {translations.Advantages?.title || 'Преимущества'}
      </h2>
      <div className='advantagesWrapper'>
        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/docs.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[0]?.title || 'Документы:'}</span>
            <span>{advantages[0]?.description || 'только Удостоверение личности'}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/time.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[1]?.title || 'Рассрочка:'}</span>
            <span>{advantages[1]?.description || 'до 10-ти лет'}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/hand.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[2]?.title || 'Первоначальный взнос:'}</span>
            <span>{advantages[2]?.description || 'от 35% от стоимости квартиры'}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/keys.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[3]?.title || 'Приобретение квартиры:'}</span>
            <span>{advantages[3]?.description || 'В порядке очереди'}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/money.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[4]?.title || 'Выплаты:'}</span>
            <span>{advantages[4]?.description || 'без кредитной истории'}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/calc.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[5]?.title || 'Рассчет стоимости ОН'}</span>
            <span>{advantages[5]?.description || ''}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/sale.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[6]?.title || 'Минимальная переплата:'}</span>
            <span>{advantages[6]?.description || '0%'}</span>
          </div>
        </div>

        <div className='advantagesBlock'>
          <div className='iconsBlock'>
            <img src="/iconItems/stop.gif" alt="" />
          </div>
          <div className='advantagesInfo'>
            <span>{advantages[7]?.title || 'Подтверждение доходов:'}</span>
            <span>{advantages[7]?.description || 'Не требуется'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;