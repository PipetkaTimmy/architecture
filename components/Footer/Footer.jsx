import React from 'react'
import FooterNews from './FooterNews'
import CopyRight from './CopyRight'

const Footer = () => {
  return (
    <footer className='containerCustom'>
      <div className='footerWrapper'>
        <div className='footerTextWrapper'>
          <div className='footerText'>
            <h2>О кооперативе</h2>
            <span>Мы более 10 лет помогаем гражданам нашей страны приобретать жилье. Мы работаем в соответствии с требованиями закона,  прозрачно и открыто.</span>
          </div>
          <div className='footerText'>
            <h2>Навигация</h2>
            <ul>
              <li>Главная</li>
              <li>О Кооперативе</li>
              <li>Новости</li>
              <li>Вопросы и ответы</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className='footerText'>
            <h2>График</h2>
            <ul>
              <li>Главная</li>
              <li>О Кооперативе</li>
              <li>Новости</li>
              <li>Вопросы и ответы</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
        <FooterNews />
      </div>
      <CopyRight />
    </footer>
  )
}

export default Footer