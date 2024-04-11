'use client'
import React, { useRef } from 'react';
import styles from './services.module.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Button } from '@nextui-org/button'

const Services = () => {
    return (
        <ParallaxProvider>
            <section className='container' id="services">
                <h1 className='title colorBlack'>Мы предлагаем большой спектр услуг</h1>
                <div className={styles.servicesContainer}>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                        <Parallax speed={5} className={styles.paralaxImg}>
                            <img src="/services_img/1.png" alt="" />
                        </Parallax>
                    </div>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                    </div>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                    </div>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                    </div>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                    </div>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                    </div>
                    <div className={styles.serviceBlock}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки и присоединения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>Проведение перепланировок (переоборудований) любого вида</p>
                            <p className={styles.miniText}>Присоединение лоджий/балконов к общей площади квартиры</p>
                        </div>
                    </div>
                    <Button className={styles.serviceBlock}>
                        Бесплатная консультация
                    </Button>
                </div>
            </section>
        </ParallaxProvider>
    )
}

export default Services
