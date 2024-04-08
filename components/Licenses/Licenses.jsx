import React from 'react'
import styles from './licenses.module.css'

const Licenses = () => {
    return (
        <section className='container'>
            <h1 className='title colorBlack'>Лицензии</h1>
            <div className={styles.licensesContainer}>
                <img src="/license_img/1.png" alt="" />
                <img src="/license_img/2.png" alt="" />
                <img src="/license_img/3.png" alt="" />
                <img src="/license_img/4.png" alt="" />
            </div>
        </section>
    )
}

export default Licenses
