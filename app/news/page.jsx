'use client'
import EventBlock from '@/components/EventBlock'
import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react'

const page = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
  }, []);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchEvents(nextPage);
  };

  return (
    <section className="containerCustom p-21">
      <h2 className="sectionTitle">Лента событий</h2>
      <div className="events">
        {events.map((event) => (
          <EventBlock
            key={event.id}
            id={event.id}
            title={event.title}
            subtitle={event.subtitle}
            image={event.image}
            date={new Date(event.created_at).toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          />
        ))}
      </div>
      {hasMore && (
        <Button className="eventsMore" onClick={loadMore}>
          Посмотреть все новости
        </Button>
      )}
    </section>
  )
}

export default page