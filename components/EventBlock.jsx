import Link from 'next/link';
import React from 'react';

const EventBlock = ({ id, title, subtitle, image, date }) => {
  return (
    <div className='eventBlock'>
      <div className='eventImg'>
        <img src={image} alt={title} />
      </div>
      <div className='eventTitle'>{title}</div>
      <div className='eventDisc'>{subtitle}</div>
      <div className='eventInfo'>
        <span>{date}</span>
        <Link href={`/fullnews?id=${id}`}>
          <span className='eventLink'>Читать дальше</span>
        </Link>
      </div>
    </div>
  );
};

export default EventBlock;