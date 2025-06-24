'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const MapDesc = () => {
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
    <div className='mapDesc'>
      <div className='mapDescComponent'>
        <div className='mapDescComponentTitle'>
          {translations.MapDesc?.workSchedule || 'График работы'}
        </div>
        <div className='mapDescInfoWrapper'>
          <div className='days'>
            <label>Рабочие дни</label>
            <div className='mapDescInfo'>
              <img src="/iconItems/cal.png" alt="" />
              <span>{translations.MapDesc?.schedule?.weekdays || 'ПН - ПТ с 09:00 по 18:00'}</span>
            </div>
          </div>
          <div className='days'>
            <label>Выходные</label>
            <div className='mapDescInfo'>
              <img src="/iconItems/cal.png" alt="" />
              <span>{translations.MapDesc?.schedule?.weekends || 'СБ - ВС'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mapDescComponent'>
        <div className='mapDescComponentTitle'>
          {translations.MapDesc?.contacts || 'Как с нами связаться'}
        </div>
        <div className='mapDescInfoWrapper'>
          <a
            href="https://wa.me/77751136940"
            target="_blank"
            rel="noopener noreferrer"
            className='mapDescInfo'
          >
            <img src="/iconItems/whatsapp.png" alt="WhatsApp" />
            <span>{translations.MapDesc?.contactInfo?.whatsapp || '+7 775 113 6940'}</span>
          </a>
          <a href="tel:+77719499185" className='mapDescInfo'>
            <img src="/iconItems/phone.png" alt="Phone" />
            <span>{translations.MapDesc?.contactInfo?.phone || '+7 771 949 9185'}</span>
          </a>
        </div>
      </div>

      <div className='mapDescComponent'>
        <div className='mapDescComponentTitle'>
          {translations.MapDesc?.social || 'Социальные сети'}
        </div>
        <div className='mapDescInfoWrapper'>
          <a
            href="https://www.instagram.com/ubw.kz.official?igsh=NnZjYm8zc3kydXZ4"
            target="_blank"
            rel="noopener noreferrer"
            className='mapDescInfo'
          >
            <img src="/iconItems/inst.png" alt="Instagram" />
            <span>{translations.MapDesc?.socialLinks?.instagram || 'Instagram'}</span>
          </a>
          <a
            href="https://www.tiktok.com/@ubw.kz?_t=ZM-8wVm6ut4oq8&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className='mapDescInfo'
          >
            <img src="/iconItems/tiktoc.png" alt="TikTok" />
            <span>{translations.MapDesc?.socialLinks?.tiktok || 'Tik-Tok'}</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default MapDesc;