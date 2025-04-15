import React, { useState } from 'react'
import { Modal, ModalContent, Button } from "@heroui/react";
import styles from '../services.module.css'

const Modal5 = ({ isOpen, onClose, }) => {
  const [expanded, setExpanded] = useState([]);

  const handleButtonPress = (item) => {
        setExpanded((prevExpanded) => {
            if (prevExpanded.includes(`${item}`)) {
                return prevExpanded.filter(i => i !== `${item}`);
            } else {
                return [`${item}`];
            }
        });
    };
  const sendMessage = (title) => {
    const baseURL = 'https://wa.me/';
    const phone = '77064213729';
    const message = `Здравсвуйте, я интересуюсь услугой "${title} ".%0aЯ хотел(а) бы узнать больше о данной услуге. Не могли бы вы подробнее рассказать о том, что вы предлагаете?`;
    const whatsappLink = `${baseURL}${phone}/?text=${message}`;

    window.open(whatsappLink, '_blank');
  }
  return (
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalContent className={[styles.modalBg, styles.modalContainer]}>
        <div className={styles.fixedImg}>
          <img src="/modal/5.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.fixedImgMob}>
            <img src="/modal/5.png" alt="" />
          </div>
          <div className={styles.modalHeader2}>
            <div className={styles.headerContainer}>
              <h2 className={styles.modalTitle}>Юридическое сопровождение</h2>
              <Button className={styles.closeBtnModal} isIconOnly onPress={() => onClose()}>
                <img src="/exit.png" alt="" />
              </Button>
            </div>
            <div className={styles.priceWraper}>
              <h2 className={styles.typeOfWork}>Цены на услуги</h2>
              <Button className={styles.priceBtn} onPress={() => sendMessage('Сопровождение по земельным отношениям')}>
                <span>Сопровождение по земельным отношениям</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Предоставления аренды земельного участка')}>
                <span>Предоставления аренды земельного участка
                  (без участия на торгах)</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Продление аренды земельного участка')}>
                <span>Продление аренды земельного участка</span>
                <span>от 50 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Выделение долей земельного участка')}>
                <span>Выделение долей земельного участка</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Сопровождение по получению разрешительных документов  на проектирование и строительство')}>
                <span>Сопровождение по получению разрешительных документов  на проектирование и строительство</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Сопровождение по прохождению частной вневедомственной экспертизы')}>
                <span>Сопровождение по прохождению частной вневедомственной экспертизы</span>
                <span>от 400 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Сопровождение по вводу объекта в эксплуатацию и/или его сносу')}>
                <span>Сопровождение по вводу объекта в эксплуатацию и/или его сносу</span>
                <span>от 50 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn} onPress={() => sendMessage('Заполнение декларации о соответствии выполненных работ')}>
                <span>Заполнение декларации о соответствии выполненных работ</span>
                <span>от 350 000 тенге</span>
              </Button>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default Modal5