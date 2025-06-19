'use client'
import React, { useState, useEffect } from 'react';
import EventBlock from '../../EventBlock';
import { Button } from '@heroui/react';
import Link from 'next/link';

const EventFeed = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://admin.ubw.kz/api/news?page=1&per_page=4&with_body_text=true');
        const data = await response.json();
        setEvents(data.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className='conteinerCustom p-21'>
      <h2 className='sectionTitle'>Лента событий</h2>
      <div className='events'>
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
      <Link href='/news/'>
        <Button className='eventsMore'>Посмотреть все новости</Button>
      </Link>
    </section>
  );
};

export default EventFeed;