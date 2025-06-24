'use client'
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@heroui/react';
import { useSearchParams } from 'next/navigation';
import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';
import { useLanguage } from '@/contexts/LanguageContext';

const FullNewsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { language } = useLanguage(); // <-- получаем язык

  useEffect(() => {
    if (!id) {
      setError('ID новости не указан');
      setIsLoaded(true);
      return;
    }

    const fetchNews = async () => {
      try {
        const response = await fetch(`https://admin.ubw.kz/api/news/${id}`);
        if (!response.ok) {
          throw new Error('Не удалось загрузить новость');
        }
        const data = await response.json();
        setNews(data.data);
        setIsLoaded(true);
      } catch (err) {
        setError(err.message);
        setIsLoaded(true);
      }
    };

    fetchNews();
  }, [id]);

  // 🔄 Обновляем при смене языка
  useEffect(() => {
    if (!news) return;
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 0); // триггерим skeleton перерисовку
  }, [language]);

  if (error) {
    return (
      <section className="containerCustom p-21">
        <div className="newsContainer">
          <div className="newsTitleWrapper">
            <div className="newsTitle">Ошибка</div>
            <div className="newsSubtitle">{error}</div>
          </div>
        </div>
      </section>
    );
  }

  const localizedTitle = language === 'kz' ? news?.title_kz : news?.title;
  const localizedSubtitle = language === 'kz' ? news?.subtitle_kz : news?.subtitle;
  const localizedBodyTextRaw = language === 'kz' ? news?.body_text_kz : news?.body_text;

  const sanitizedBodyText = localizedBodyTextRaw
    ? sanitizeHtml(localizedBodyTextRaw, {
        allowedTags: ['p', 'br', 'strong', 'em', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'a'],
        allowedAttributes: {
          a: ['href', 'target'],
        },
      })
    : '';

  return (
    <section className="containerCustom p-21">
      <div className="newsContainer">
        <Skeleton className="rounded-lg" isLoaded={isLoaded}>
          <div className="newsTitleWrapper">
            <div className="newsTitle">{localizedTitle || 'Загрузка...'}</div>
            <div className="newsSubtitle">{localizedSubtitle || 'Загрузка...'}</div>
          </div>
        </Skeleton>
        <Skeleton className="rounded-lg" isLoaded={isLoaded}>
          <img className="newsImg" src={news?.image || '/ref.png'} alt={localizedTitle || ''} />
        </Skeleton>
        <Skeleton className="rounded-lg" isLoaded={isLoaded}>
          <div className="bodyTextWrapper">
            <div className="bodyText">
              {sanitizedBodyText ? parse(sanitizedBodyText) : 'Загрузка...'}
            </div>
          </div>
        </Skeleton>
      </div>
    </section>
  );
};

export default FullNewsPage;
