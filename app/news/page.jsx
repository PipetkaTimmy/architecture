'use client';
import EventBlock from '@/components/EventBlock';
import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const page = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('News', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  const fetchEvents = async (page) => {
    try {
      const response = await fetch(
        `https://admin.ubw.kz/api/news?page=${page}&per_page=8&with_body_text=true`
      );
      const data = await response.json();
      setEvents((prevEvents) => [...prevEvents, ...data.data]);
      setHasMore(data.current_page < data.last_page);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  return (
    <section className="containerCustom p-21">
      <h2 className="sectionTitle">{translations.News?.title || 'Лента событий'}</h2>
      <div className="events">
        {events.map((event) => (
          <EventBlock
            key={event.id}
            id={event.id}
            title_ru={event.title_ru}
            title_kz={event.title_kz}
            subtitle_ru={event.subtitle_ru}
            subtitle_kz={event.subtitle_kz}
            image={event.image}
            date={new Date(event.created_at).toLocaleDateString(`${language}-KZ`, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          />
        ))}
      </div>
      {hasMore && (
        <Button className="eventsMore" onClick={loadMore}>
          {translations.News?.moreButton || 'Посмотреть все новости'}
        </Button>
      )}
    </section>
  );
};

export default page;