import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer} id='footer'>
            <div className={styles.contactsContainer}>
                <img src="/logo.svg" alt="" className={styles.logo} />
                <div className={styles.phoneAndMail}>
                    <div className={styles.contactBlock}>
                        <span>г. Астана</span>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/phonel.png" alt="" />
                        <span>+7 706 421 37 29</span>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/maill.png" alt="" />
                        <span>nomadstroyproject@mail.ru</span>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.contactBlock}>
                        <img src="/instl.png" alt="" />
                        <a href="https://www.instagram.com/nomadstroy_project?igsh=MWRzZ3Yzbm9hcmEybg==" _blank>
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/wpl.png" alt="" />
                        <a href="https://wa.me/77064213729" _blank>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                    <div className={styles.contactBlock}>
                        <img src="/tgl.png" alt="" />
                        <a href="https://t.me/77064213729" _blank>
                            <span>Telegram</span>
                        </a>
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