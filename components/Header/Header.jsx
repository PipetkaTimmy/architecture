import React from 'react'
import styles from './header.module.css'
import {Button} from'@nextui-org/button'


const Header = () => {
    return (
        <section className={styles.header}>
            <div className="container">
                <div className={styles.headerText}>
                    <h1 className='title text-white'>Профессиональное проектирование и узаконение</h1>
                    <p className={`${styles.addText} text-white`}>Мы обеспечиваем соблюдение архитектурных и градостроительных стандартов на всех этапах строительства.</p>
                    <Button className={styles.headerButton}>Бесплатная консультация</Button>
                </div>
            </div>
        </section>
    )
}

export default Header
