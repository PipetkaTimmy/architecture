import React, { useState } from 'react'
import { Modal, ModalContent, Button, Accordion, AccordionItem } from "@nextui-org/react";
import styles from '../services.module.css'
import Link from 'next/link';

const Modal2 = ({ isOpen, onClose, }) => {
  const [expanded, setExpanded] = useState([]);

  const handleButtonClick = (item) => {
    setExpanded([`${item}`]);
  };

  return (
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalContent className={[styles.modalBg, styles.modalContainer]}>
        <div className={styles.fixedImg}>
          <img src="/modal/2.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.fixedImgMob}>
            <img src="/modal/2.png" alt="" />
          </div>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Жилой дом и хозяйственно-бытовые постройки</h2>
            <div className={styles.modalNav}>
              <h2 className={styles.typeOfWork}>Вид работы </h2>
              <div className={styles.buttonWraper}>
                <Link href="/#accordion1" className={styles.modalNavBtn} onClick={() => handleButtonClick(1)}>Перепланировка и переоборудование жилого дома и хоз.бытовых построек</Link>
                <Link href="/#accordion2" className={styles.modalNavBtn} onClick={() => handleButtonClick(2)}>Разделение жилого дома</Link>
                <Link href="/#accordion3" className={styles.modalNavBtn} onClick={() => handleButtonClick(3)}>Узаконение сноса</Link>
                <Link href="/#accordion4" className={styles.modalNavBtn} onClick={() => handleButtonClick(4)}>Узаконение нового строительства</Link>
              </div>
              <div className={styles.grayBlocksWraper}>
                <div className={styles.grayBlock}>Реконструкция жилого дома (пристройка) (<b>СКОРО</b>)</div>
              </div>
            </div>
          </div>
          <Accordion className={styles.accordionWraper} selectedKeys={expanded}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Перепланировка и переоборудование жилого дома и хоз.бытовых построек" className={styles.accordion} id='accordion1' onClick={() => handleButtonClick(1)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое перепланировка и переоборудование жилого дома и/или хозяйственно-бытовых построек</h2>
                  <span>Перепланировка и переоборудование жилого дома и/или хозяйственно-бытовых построек - изменения внутренней планировки или оборудования для адаптации под новые потребности или улучшения условий проживания.</span>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>1 рабочий день</span>
                  </div>
                  <div className={styles.preSteps}>
                    <h2>Этапы работы </h2>
                    <div className={styles.preStepsWraper}>
                      <div>Предварительная экспертиза</div>
                      <div>Заключение Договора</div>
                      <div>Набор технического проекта</div>
                      <div>Заказ и согласования технического паспорта с Заказчиком</div>
                      <div>Набор актов ввода объекта в эксплуатацию</div>
                      <div>Регистрация во всех уполномоченных государственных органах, с дальнейшей сверкой документов</div>
                      <div>Доставка готовых документов на дом или офис, либо отправка курьером</div>
                    </div>
                  </div>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>11 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 80 000 тенге.</span>
                    <span>* государственная пошлина за технический паспорт оплачивается отдельно</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem key="2" aria-label="Accordion 2" title="Разделение жилого дома" className={styles.accordion} id='accordion2' onClick={() => handleButtonClick(2)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое разделение жилого дома?</h2>
                  <span>Законодательство нашей страны позволяет гражданам делить жилые дома на 2 его части, чаще всего они называются таунхаусами. Что представляет собой, прекращений прав на общую совместную и раздел ее на общую долевую собственность, каждая из которых переходит в частную собственность одного из бывших совладельцев, который может распоряжаться своим имуществом в пределах законодательства. Для того чтобы, разделить жилой дом, обращайтесь к нашим специалистам, которые дадут профессиональную оценку.</span>
                </div>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза (выезд на объект в случае необходимости и оценка о возможности разделения дома)</div>
                    <div>Заключение Договора</div>
                    <div>Разработка технического проекта</div>
                    <div>Присвоение адреса на разделенные дома</div>
                    <div>Заказ технических паспортов и согласование его с Заказчиком</div>
                    <div>Расчет долей земельного участка</div>
                    <div>Получение общедолевых государственных актов на земельный участок с дальнейшей регистрацией</div>
                    <div>Набор актов ввода в эксплуатацию</div>
                    <div>Регистрация в уполномоченных государственных органах с дальнейшей сверкой документов</div>
                    <div>Доставка документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>25 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 250 000 тенге.</span>
                    <span>*в стоимость работ не включены оплаты государственных пошлин.</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem key="3" aria-label="Accordion 3" title="Узаконение сноса" className={styles.accordion} id='accordion3' onClick={() => handleButtonClick(3)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое узаконения сноса?</h2>
                  <span>В случае если собственник снес строения самовольно, либо собирается начинать процесс сноса в натуре, то необходимость в получении разрешительных документов также обязательна, как и в случае нового строительства. Для начала нужно осуществить техническое обследования зданий и сооружений, что позволит дать экспертную оценку.</span>
                  <span>Наши специалисты помогут Вам, даже если строение было снесено давно, но в Форме-2 снесенные литера еще сидят, либо вы только начинаете процесс сноса.</span>
                </div>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза</div>
                    <div>Заключение Договора</div>
                    <div>Техническое обследование</div>
                    <div>Решение о пост утилизации (разрешение на снос)</div>
                    <div>Набор актов сноса</div>
                    <div>Регистрация во всех уполномоченных государственных органов, с дальнейшей сверкой документов</div>
                    <div>Доставка готовых документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>12 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 130 000 тенге.</span>
                    <span>*в стоимость включены все затраты</span>
                    <Button className={styles.accordionBtn}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem key="4" aria-label="Accordion 3" title="Узаконение нового строительства" className={styles.accordion} id='accordion4' onClick={() => handleButtonClick(4)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое узаконение нового строительства жилого дома или хозяйственно-бытовых построек?</h2>
                  <span>В нашем законодательстве есть такое понятие, как получение разрешительных документов на предстоящее строительство - в нашем случае это является АПЗ и Эскизный проект согласованный в местном исполнительном органе, после которого начинается процесс стройки и дальнейшего ввода в эксплуатацию, однако бывают и такие случае когда сперва построились, а уже потом начинают процесс узаконения, что сулит неблагоприятным последствиям собственникам земельного участка. Для того, чтобы узнать все тонкости и нюансы в этой области и как узаконить свой дом, обращайтесь к нам!</span>
                </div>
                <div className={styles.preSteps}>
                  <h2>Этапы работы </h2>
                  <div className={styles.preStepsWraper}>
                    <div>Предварительная экспертиза</div>
                    <div>Заключение договора</div>
                    <div>Получения разрешения на проектирование (АПЗ)</div>
                    <div>Разработка эскизного проекта</div>
                    <div>Согласования проекта в ГУ “УАГиЗО” (управления архитектуры)</div>
                    <div>Регистрация Исполнительной съемки в АстанаГенПлан (НИППи)</div>
                    <div>Набор актов ввода в эксплуатацию</div>
                    <div>Внесения строения в правовой кадастр</div>
                    <div>Регистрация в уполномоченных государственных органов</div>
                    <div>Корректировка по площади и других нюансов после регистрации актов ввода в правовом кадастре</div>
                    <div>Доставка документов на дом или офис, либо отправка курьером</div>
                  </div>
                </div>
                <div className={styles.steps}>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>45 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Срок работы</span>
                    <span>от 350 000 тенге.</span>
                    <span>*в стоимость оказания услуг не входит стоимость государственной пошлины за технический паспорт, исполнительной и топографической съемки.</span>
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

export default Modal2