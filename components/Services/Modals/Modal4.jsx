import React, { useState } from 'react'
import { Modal, ModalContent, Button, Accordion, AccordionItem } from "@nextui-org/react";
import styles from '../services.module.css'
import Link from 'next/link';

const Modal4 = ({ isOpen, onClose, }) => {
  const [expanded, setExpanded] = useState([]);

  const handleButtonClick = (item) => {
    setExpanded([`${item}`]);
  };

  return (
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalContent className={[styles.modalBg, styles.modalContainer]}>
        <div className={styles.fixedImg}>
          <img src="/modal/4.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.fixedImgMob}>
            <img src="/modal/4.png" alt="" />
          </div>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Проектирование</h2>
            <div className={styles.modalNav}>
              <h2 className={styles.typeOfWork}>Вид работы </h2>
              <div className={styles.buttonWraper}>
                <Link href="/#accordion1" className={styles.modalNavBtn} onClick={() => handleButtonClick(1)}>Перепланировка нежилого помещения</Link>
                <Link href="/#accordion2" className={styles.modalNavBtn} onClick={() => handleButtonClick(2)}>Разделение нежилого помещения</Link>
                <Link href="/#accordion2" className={styles.modalNavBtn} onClick={() => handleButtonClick(3)}>Объединение нежилых помещений</Link>
              </div>
              <div className={styles.grayBlocksWraper}>
                <div className={styles.grayBlock}>Изменение функционального назначения (целевое назначение помещения) (<b>СКОРО</b>)</div>
                <div className={styles.grayBlock}>Реконструкция фасада с добавлением входной группы либо пристройки (<b>СКОРО</b>)</div>
                <div className={styles.grayBlock}>Возведение 2-го этажа (<b>СКОРО</b>)</div>
              </div>
            </div>
          </div>
          <Accordion className={styles.accordionWraper} selectedKeys={expanded}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Перепланировка нежилого помещения" className={styles.accordion} id='accordion1' onClick={() => handleButtonClick(1)}>
              <div className={styles.accordionBody}>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза</div>
                    <div>Заключение договора</div>
                    <div>Набор технического проекта</div>
                    <div>Заказ и согласования технического паспорта с Заказчиком</div>
                    <div>Набор актов ввода объекта в эксплуатацию</div>
                    <div>Регистрация во всех уполномоченных государственных органах, с дальнейшей сверкой документов</div>
                    <div>Доставка готовых документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>10 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 80 000 тенге.</span>
                    <span>* государственная пошлина за технический паспорт оплачивается заказчиком отдельно</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Разделение нежилого помещения" className={styles.accordion} id='accordion2' onClick={() => handleButtonClick(2)}>
              <div className={styles.accordionBody}>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза (выезд на объект в случае необходимости и оценка о возможности разделения помещения)</div>
                    <div>Заключение договора</div>
                    <div>Разработка технического проекта</div>
                    <div>Присвоение адреса на разделенные помещения в управление архитектуры</div>
                    <div>Заказ нового технического паспорта и согласование его с Заказчиком</div>
                    <div>Набор актов ввода в эксплуатацию</div>
                    <div>Регистрация в уполномоченных государственных органах с дальнейшей сверкой документов</div>
                    <div>Доставка документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>17 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 150 000 тенге.</span>
                    <span>* в стоимость услуг не входит государственная пошлина за технический паспорт.</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Объединение нежилых помещений" className={styles.accordion} id='accordion3' onClick={() => handleButtonClick(3)}>
              <div className={styles.accordionBody}>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза (выезд на объект в случае необходимости и оценка о возможности объединения помещений)</div>
                    <div>Заключение договора</div>
                    <div>Разработка технического проекта</div>
                    <div>Присвоение адреса на объединенное помещение в управлении архитектуры</div>
                    <div>Заказ нового технического паспорта и согласование его с Заказчиком</div>
                    <div>Набор актов ввода в эксплуатацию</div>
                    <div>Регистрация в уполномоченных государственных органах с дальнейшей сверкой документов</div>
                    <div>Доставка документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>17 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 150 000 тенге.</span>
                    <span>* в стоимость услуг не входит государственная пошлина за технический паспорт.</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default Modal4