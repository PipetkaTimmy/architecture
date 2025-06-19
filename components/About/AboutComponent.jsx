'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutComponent = () => {
  const [aboutText, setAboutText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        const aboutUsText = data.find((item) => item.key === 'block1.about_us')?.text_ru || 'Текст не найден';
        setAboutText(aboutUsText);
      } catch (err) {
        console.error('Axios error:', err);
        setError(err.message || 'Ошибка при загрузке текста');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutText();
  }, []);

  return (
    <section className="containerCustom p-21">
      <h2 className="sectionTitle">Коротко о нас</h2>
      <div className="aboutBlock">
        <div className="aboutBlockText">
          {loading ? (
            <div>Загрузка...</div>
          ) : error ? (
            <div className="error">Ошибка: {error}</div>
          ) : (
            <div>{aboutText}</div>
          )}
          <div>Мы объединяем усилия для реализации права казахстанцев на доступное жильё.</div>
        </div>
        <div className="aboutBlockImg">
          <img src="/aboutbaner.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;