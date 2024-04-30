import React, { useState } from 'react'
import styles from './header.module.css'
import Link from "next/link";
import { Button } from "@nextui-org/button";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const changeMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <section className={styles.header}>
            <div className="container">
                <div className="navbar">
                    <img src="/logo.svg" alt="" />
                    <div className="navigation">
                        <Link href="/#services" className={styles.hoverLink}>Услуги</Link>
                        <Link href="/#calc" className={styles.hoverLink}>Расчет стоимости</Link>
                        <Link href="/#faq" className={styles.hoverLink}>Полезная информация</Link>
                        <Link href="/#licenses" className={styles.hoverLink}>Лицензия</Link>
                        <Link href="/#footer" className={styles.hoverLink}>Контакты</Link>
                    </div>
                    <div className='navMob'>
                        <Button className='navBtn' onClick={() => changeMenu()}>
                            <img src="/menu.svg" alt=""/>
                        </Button>
                        <div className={`navMobContainer ${isMenuOpen ? 'navOpen' : ''}`}>
                            <div className='mobNavHeader'>
                                <span>Меню</span>
                                <Button className='navBtn' onClick={() => changeMenu()}>
                                    <img src="/close.svg" alt="" />
                                </Button>
                            </div>
                            <div className='mobLinksWraper'>
                                <Link href="/#services" className={styles.hoverLink}>Услуги</Link>
                                <Link href="/#calc" className={styles.hoverLink}>Расчет стоимости</Link>
                                <Link href="/#faq" className={styles.hoverLink}>Полезная информация</Link>
                                <Link href="/#licenses" className={styles.hoverLink}>Лицензия</Link>
                                <Link href="/#footer" className={styles.hoverLink}>Контакты</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerText}>
                    <span className={styles.marker}>г.Астана</span>
                    <h1 className='title text-white'>Профессиональное проектирование и узаконение</h1>
                    <p className={`${styles.addText} text-white`}>Открой новые горизонты с Nomad:
                        Воплощаем историю в современных проектах!</p>
                    <Button className={styles.headerButton} onClick={() => window.open('https://wa.me/+77064213729/?text=Здравствуйте, я интересуюсь профессиональным проектированием и узаконением. Я хотел(а) бы узнать больше о ваших услугах в этой области. Не могли бы вы подробнее рассказать о том, что вы предлагаете?', '_blank')}>Бесплатная консультация</Button>
                </div>
            </div>
        </section>
    )
}

export default Header
