'use client'
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.ubw.kz/api/site-texts/block2');
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные');
        }
        const data = await response.json();
        setBlocks(data.data); // Сохраняем массив data из ответа
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="counterComponent">Ошибка: {error}</div>;
  }

  return (
    <div className="counterComponent">
      {blocks.length > 0 ? (
        blocks.map((block) => (
          <div key={block.id} className="blackGlassBlock">
            <span>{block.text_ru}+</span>
            <span>{block.label}</span>
          </div>
        ))
      ) : (
        // Заглушка на время загрузки
        <>
          <div className="blackGlassBlock">
            <span>Загрузка...</span>
            <span>Загрузка...</span>
          </div>
          <div className="blackGlassBlock">
            <span>Загрузка...</span>
            <span>Загрузка...</span>
          </div>
          <div className="blackGlassBlock">
            <span>Загрузка...</span>
            <span>Загрузка...</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;