'use client'
import styles from './services.module.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Button, useDisclosure } from '@nextui-org/react';
import Modal1 from './Modals/Modal1';
import Modal2 from './Modals/Modal2';
import Modal3 from './Modals/Modal3';
import Modal4 from './Modals/Modal4';
import Modal5 from './Modals/Modal5';

const Services = () => {

    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
    const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
    const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
    const { isOpen: isOpenModal5, onOpen: onOpenModal5, onClose: onCloseModal5 } = useDisclosure();

    return (
        <ParallaxProvider>
            <section className='container' id="services">
                <h1 className='title colorBlack'>Мы предлагаем большой спектр услуг</h1>
                <div className={styles.servicesContainer}>
                    <Button className={styles.serviceBlock} onClick={onOpenModal1}>
                        <h3 className={styles.serviceBlockTitle}>Узаконение <br /> квартир</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>- Набор актов ввода в эксплуатацию</p>
                            <p className={styles.miniText}>- Все виды перепланировок</p>
                            <p className={styles.miniText}>- Разделение/объединение</p>
                            <p className={styles.miniText}>- Вывод в нежилой фонд</p>
                            <p className={styles.miniText}>- Захват площади кондоминиума</p>
                        </div>
                        <Parallax speed={5} className={styles.paralaxImg}>
                            <img src="/services_img/1.png" alt="" />
                        </Parallax>
                    </Button>
                    <Button className={styles.serviceBlock} onClick={onOpenModal2}>
                        <h3 className={styles.serviceBlockTitle}>Жилой дом и хозяйственно- <br /> бытовые постройки</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>- Перепланировка и переоборудование жилого дома и хоз.бытовых построек</p>
                            <p className={styles.miniText}>- Разделение жилого дома</p>
                            <p className={styles.miniText}>- Узаконение сноса</p>
                            <p className={styles.miniText}>- Узаконение нового строительства</p>
                            <p className={styles.miniText}>- Реконструкция жилого дома (пристройка) (скоро)</p>
                        </div>
                        <Parallax speed={5} className={styles.paralaxImg}>
                            <img src="/services_img/2.png" alt="" />
                        </Parallax>
                    </Button>
                    <Button className={styles.serviceBlock} onClick={onOpenModal3}>
                        <h3 className={styles.serviceBlockTitle}>Перепланировки</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>- Технический проект</p>
                            <p className={styles.miniText}>- Эскизный проект</p>
                            <p className={styles.miniText}>- Получение разрешительных  документов на строительство</p>
                        </div>
                        <Parallax speed={5} className={styles.paralaxImg}>
                            <img src="/services_img/3.png" alt="" />
                        </Parallax>
                    </Button>


                    <Button className={styles.serviceBlock} onClick={onOpenModal4}>
                        <h3 className={styles.serviceBlockTitle}>Коммерческие <br /> помещения</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>-Перепланировка</p>
                            <p className={styles.miniText}>-Разделение нежилого помещения</p>
                            <p className={styles.miniText}>-Объединение нежилых помещений</p>
                            <p className={styles.miniText}>-Изменение функционального назначения (скоро)</p>
                            <p className={styles.miniText}>-Реконструкция фасада с новым входом или пристройкой (скоро)</p>
                            <p className={styles.miniText}>-Возведение 2-го этажа (скоро)</p>
                        </div>
                        <Parallax speed={5} className={styles.paralaxImg}>
                            <img src="/services_img/4.png" alt="" />
                        </Parallax>
                    </Button>
                    <Button className={styles.serviceBlock} onClick={onOpenModal5}>
                        <h3 className={styles.serviceBlockTitle}>Юридическое <br /> сопровождение</h3>
                        <div className={styles.addText}>
                            <p className={styles.miniText}>-Земельные отношения и <br /> представительство</p>
                        </div>
                        <Parallax speed={5} className={styles.paralaxImg}>
                            <img src="/services_img/5.png" alt="" />
                        </Parallax>
                    </Button>
                </div>
            </section>
            <Modal1 isOpen={isOpenModal1} onClose={onCloseModal1} />
            <Modal2 isOpen={isOpenModal2} onClose={onCloseModal2} />
            <Modal3 isOpen={isOpenModal3} onClose={onCloseModal3} />
            <Modal4 isOpen={isOpenModal4} onClose={onCloseModal4} />
            <Modal5 isOpen={isOpenModal5} onClose={onCloseModal5} />
        </ParallaxProvider >
    )
}

export default Services