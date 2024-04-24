import React, { useState } from 'react'
import { Modal, ModalContent, Button } from "@nextui-org/react";
import styles from '../services.module.css'

const Modal5 = ({ isOpen, onClose, }) => {
  const [expanded, setExpanded] = useState([]);

  const handleButtonClick = (item) => {
    setExpanded([`${item}`]);
  };

  return (
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalContent className={[styles.modalBg, styles.modalContainer]}>
        <div className={styles.fixedImg}>
          <img src="/modal/5.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Юридическое сопровождение</h2>
            <div className={styles.priceWraper}>
              <h2 className={styles.typeOfWork}>Цены на услуги</h2>
              <Button className={styles.priceBtn}>
                <span>Сопровождение по земельным отношениям</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
                <span>Предоставления аренды земельного участка
                  (без участия на торгах)</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
                <span>Продление аренды земельного участка</span>
                <span>от 50 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
                <span>Выделение долей земельного участка</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
                <span>Сопровождение по получению разрешительных документов  на проектирование и строительство</span>
                <span>от 100 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
                <span>Сопровождение по прохождению частной вневедомственной экспертизы</span>
                <span>от 400 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
                <span>Сопровождение по вводу объекта в эксплуатацию и/или его сносу</span>
                <span>от 50 000 тенге</span>
              </Button>

              <Button className={styles.priceBtn}>
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