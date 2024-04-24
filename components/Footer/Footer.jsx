import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer} id='footer'>
            <div className={styles.contactsContainer}>
                <img src="/dark_logo.png" alt="" className={styles.logo} />
                <div className={styles.phoneAndMail}>
                    <div className={styles.contactBlock}>
                        <img src="/phone.png" alt="" />
                        <span>+7 706 421 37 29</span>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/mail.png" alt="" />
                        <span>nomadstroyproject@mail.ru</span>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.contactBlock}>
                        <img src="/inst.png" alt="" />
                        <span>Instagram</span>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/wp.png" alt="" />
                        <span>WhatsApp</span>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/tg.png" alt="" />
                        <span>Telegram</span>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>© NOMAD STROY PROJECT, 2024</span>
            </div>
        </footer>
    )
}

export default Footer