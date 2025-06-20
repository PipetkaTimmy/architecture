'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

// Функция для декодирования Unicode-экранированных строк
const decodeUnicode = (str) => {
  return str.replace(/\\u[\dA-F]{4}/gi, (match) => {
    return String.fromCharCode(parseInt(match.replace('\\u', ''), 16));
  });
};

const FooterNews = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('Footer', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://admin.ubw.kz/api/news?page=1&per_page=3&with_body_text=true'
        );
        if (!response.ok) {
          throw new Error(translations.FooterNews?.error || 'Не удалось загрузить новости');
        }
        const data = await response.json();
        const decodedNews = data.data.map((item) => ({
          ...item,
          title: decodeUnicode(item[`title_${language}`] || item.title),
        }));
        setNews(decodedNews);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
      }
    };

    fetchNews();
  }, [language, translations]);

  if (error) {
    return (
      <div className="footerNewsWrapper">
        {translations.FooterNews?.error || 'Ошибка: Не удалось загрузить новости'}
      </div>
    );
  }

  return (
    <div className="footerNewsWrapper">
      <h2>{translations.FooterNews?.title || 'Новости'}</h2>
      <div className="footerNews">
        {news.length > 0 ? (
          news.map((item) => (
            <Link href={`/fullnews?id=${item.id}`} key={item.id}>
              <div className="footerNewsBlock">
                <img src={item.image || '/footer/news1.png'} alt={item.title} />
                <div>
                  <div className="footerNewsBlockTitle">{item.title}</div>
                  <div className="footerNewsBlockDate">
                    {new Date(item.created_at).toLocaleDateString(`${language}-KZ`, {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <>
            <div className="footerNewsBlock">
              <img src="/footer/news1.png" alt="" />
              <div>
                <div className="footerNewsBlockTitle">
                  {translations.FooterNews?.loading || 'Загрузка...'}
                </div>
                <div className="footerNewsBlockDate">
                  {translations.FooterNews?.loading || 'Загрузка...'}
                </div>
              </div>
            </div>
            <div className="footerNewsBlock">
              <img src="/footer/news1.png" alt="" />
              <div>
                <div className="footerNewsBlockTitle">
                  {translations.FooterNews?.loading || 'Загрузка...'}
                </div>
                <div className="footerNewsBlockDate">
                  {translations.FooterNews?.loading || 'Загрузка...'}
                </div>
              </div>
            </div>
            <div className="footerNewsBlock">
              <img src="/footer/news1.png" alt="" />
              <div>
                <div className="footerNewsBlockTitle">
                  {translations.FooterNews?.loading || 'Загрузка...'}
                </div>
                <div className="footerNewsBlockDate">
                  {translations.FooterNews?.loading || 'Загрузка...'}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FooterNews;