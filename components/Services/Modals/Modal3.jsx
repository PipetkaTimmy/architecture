import React, { useState } from 'react'
import { Modal, ModalContent, Button, Accordion, AccordionItem } from "@nextui-org/react";
import styles from '../services.module.css'
import Link from 'next/link';

const Modal3 = ({ isOpen, onClose, }) => {
  const [expanded, setExpanded] = useState([]);

  const handleButtonClick = (item) => {
    setExpanded([`${item}`]);
  };

  return (
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalContent className={[styles.modalBg, styles.modalContainer]}>
        <div className={styles.fixedImg}>
          <img src="/modal/3.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.fixedImgMob}>
            <img src="/modal/3.png" alt="" />
          </div>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Проектирование</h2>
            <div className={styles.modalNav}>
              <h2 className={styles.typeOfWork}>Вид работы </h2>
              <div className={styles.buttonWraper}>
                <Link href="/#accordion1" className={styles.modalNavBtn} onClick={() => handleButtonClick(1)}>Технический проект</Link>
                <Link href="/#accordion2" className={styles.modalNavBtn} onClick={() => handleButtonClick(2)}>Эскизный проект</Link>
              </div>
            </div>
          </div>
          <Accordion className={styles.accordionWraper} selectedKeys={expanded}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Технический проект" className={styles.accordion} id='accordion1' onClick={() => handleButtonClick(1)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое технический проект?</h2>
                  <span>Это вид предпроектной документации разрабатываемый в целях проведения реконструкции, перепланировки, переоборудования помещений (отдельных частей) существующих зданий (сооружений). В нем включаются все архитектурные решения соответствующие законодательным нормам (СНиП) в сфере строительства, проектирования и желаниям Заказчика. Наши архитекторы помогут Вам в создании идеального проекта, который в дальнейшем воплотится в реальность!</span>
                  <div>
                    *В случае, если изменения затрагивают конструктивные решения, в части ограждающей (несущей) стены, изменения инженерных сетей, коммуникаций существующих зданий, проект обязан согласовываться с местным исполнительным органом.
                  </div>
                </div>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза</div>
                    <div>Заключение договора</div>
                    <div>Выезд архитектора для обмера объекта (квартира, нежилое помещение, жилого дома)</div>
                    <div>Составление технического проекта</div>
                    <div>Получения АПЗ (архитектурно-планировочное задание) и Решения с ГУ “УАГиЗО” (управления архитектуры)</div>
                    <div>Доставка документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>10 рабочих дней</span>
                    <span>*в срок оказания услуг не входит срок рассмотрения в  ГУ “Управления архитектуры, градостроительства и земельных отношений”.</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 100 000 тенге.</span>
                    <span>*рассчитывается на основании сложности проекта</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Эскизный проект" className={styles.accordion} id='accordion2' onClick={() => handleButtonClick(2)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое Эскизный проект?</h2>
                  <span>Эскиз (эскизный проект) - упрощенный вид проектного (планировочного, пространственного, архитектурного, технологического, конструктивного, инженерного, декоративного или другого) решения, выполненный в форме схемы, чертежа, первоначального наброска (рисунка) и объясняющий замысел этого решения. Эскизный проект разрабатывается на стадии намерения строительства нового строения (жилого дома, гаража, бани и т.д.), который в обязательном порядке должен согласовываться с местным исполнительным органом. Наши архитекторы помогут Вам в создании идеального проекта, который в дальнейшем воплотится в реальность!</span>
                </div>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза</div>
                    <div>Заключение договора</div>
                    <div>Выезд архитектора для обмера объекта (жилой дом, баня, гараж и т.д.)</div>
                    <div>Получения АПЗ (архитектурно-планировочного задания) с ГУ “УАГиЗО” (управления архитектуры)</div>
                    <div>Набор эскизного проекта</div>
                    <div>Согласование эскиза с ГУ “УАГиЗО” (управления архитектуры)</div>
                    <div>Доставка документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>15 рабочих дней</span>
                    <span>*в срок оказания услуг не входит срок рассмотрений АПЗ и Согласования проекта ГУ “Управления архитектуры, градостроительства и земельных отношений”</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 80 000 тенге.</span>
                    <span>*рассчитывается на основании сложности проекта</span>
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

export default Modal3