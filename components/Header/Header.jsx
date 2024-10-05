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
                        {/* <a href="tel:+77064213729"><Button className={styles.mobileBlock}> +7 706 421 37 29</Button></a> */}
                        <a href="tel:+77064213729">+7 706 421 37 29</a>
                    </div>
                    <div className='navMob'>
                        <Button className='navBtn' onPress={() => changeMenu()}>
                            <img src="/menu.svg" alt="" />
                        </Button>
                        <div className={`navMobContainer ${isMenuOpen ? 'navOpen' : ''}`}>
                            <div>
                                <div className='mobNavHeader'>
                                    <span>Меню</span>
                                    <Button className='navBtn' onPress={() => changeMenu()}>
                                        <img src="/close.svg" alt="" />
                                    </Button>
                                </div>
                                <div className='mobLinksWraper'>
                                    <Link onPress={() => changeMenu()} href="/#services" className={styles.hoverLink}>Услуги</Link>
                                    <Link onPress={() => changeMenu()} href="/#calc" className={styles.hoverLink}>Расчет стоимости</Link>
                                    <Link onPress={() => changeMenu()} href="/#faq" className={styles.hoverLink}>Полезная информация</Link>
                                    <Link onPress={() => changeMenu()} href="/#licenses" className={styles.hoverLink}>Лицензия</Link>
                                    <Link onPress={() => changeMenu()} href="/#footer" className={styles.hoverLink}>Контакты</Link>
                                </div>
                            </div>
                            <div className='bottomContacts'>
                                <span>Контакты</span>
                                <div className='mobCont'>
                                    <img src="/phone_white.png" alt="" />
                                    <a href="tel:+77064213729">
                                        <span>
                                            +7 706 421 37 29
                                        </span>
                                    </a>
                                </div>
                                <div className='mobCont'>
                                    <img src="/mail_white.png" alt="" />
                                    <span>
                                        nomadstroyproject@mail.ru
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerText}>
                    {/* <span className={styles.marker}>г.Астана</span> */}
                    <h1 className='title text-white'>Архитектурное проектирование и узаконение недвижимости <br /> “под ключ” </h1>
                    {/* <p className={`${styles.addText} text-white`}>Открой новые горизонты с Nomad:
                        Воплощаем историю в современных проектах!</p> */}
                    <Button className={styles.headerButton} onPress={() => window.open('https://wa.me/77064213729/?text=Здравствуйте! Пишу Вам с сайта nomadstroyproject.kz%0a Я хотел(а) бы узнать больше о предоставляемых Вами услугах.', '_blank')}>Бесплатная консультация</Button>
                </div>
                <div className={styles.headerDopText}>
                    <ul>Открой новые горизонты с Nomad: 
                        <li>для первых клиентов скидка 20%</li>
                        <li>юридический аудит в подарок</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header
