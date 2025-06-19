'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Функция для декодирования Unicode-экранированных строк
const decodeUnicode = (str) => {
  return str.replace(/\\u[\dA-F]{4}/gi, (match) => {
    return String.fromCharCode(parseInt(match.replace('\\u', ''), 16));
  });
};

const FooterNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://admin.ubw.kz/api/news?page=1&per_page=3&with_body_text=true');
        if (!response.ok) {
          throw new Error('Не удалось загрузить новости');
        }
        const data = await response.json();
        const decodedNews = data.data.map((item) => ({
          ...item,
          title: decodeUnicode(item.title),
        }));
        setNews(decodedNews);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="footerNewsWrapper">Ошибка: {error}</div>;
  }

  return (
    <div className="footerNewsWrapper">
      <h2>Новости</h2>
      <div className="footerNews">
        {news.length > 0 ? (
          news.map((item) => (
            <Link href={`/fullnews?id=${item.id}`} key={item.id}>
              <div className="footerNewsBlock">
                <img src={item.image || '/footer/news1.png'} alt={item.title} />
                <div>
                  <div className="footerNewsBlockTitle">{item.title}</div>
                  <div className="footerNewsBlockDate">
                    {new Date(item.created_at).toLocaleDateString('ru-RU', {
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
          // Заглушка на время загрузки
          <>
            <div className="footerNewsBlock">
              <img src="/footer/news1.png" alt="" />
              <div>
                <div className="footerNewsBlockTitle">Загрузка...</div>
                <div className="footerNewsBlockDate">Загрузка...</div>
              </div>
            </div>
            <div className="footerNewsBlock">
              <img src="/footer/news1.png" alt="" />
              <div>
                <div className="footerNewsBlockTitle">Загрузка...</div>
                <div className="footerNewsBlockDate">Загрузка...</div>
              </div>
            </div>
            <div className="footerNewsBlock">
              <img src="/footer/news1.png" alt="" />
              <div>
                <div className="footerNewsBlockTitle">Загрузка...</div>
                <div className="footerNewsBlockDate">Загрузка...</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FooterNews;