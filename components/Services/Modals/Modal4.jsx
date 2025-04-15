import React, { useState } from 'react'
import { Modal, ModalContent, Button, Accordion, AccordionItem } from "@heroui/react";
import styles from '../services.module.css'
import Link from 'next/link';

const Modal4 = ({ isOpen, onClose, }) => {
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
          <img src="/modal/4.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.fixedImgMob}>
            <img src="/modal/4.png" alt="" />
          </div>
          <div className={styles.modalHeader}>
            <div className={styles.headerContainer}>
              <h2 className={styles.modalTitle}>Коммерческие помощения</h2>
              <Button className={styles.closeBtnModal} isIconOnly onPress={() => onClose()}>
                <img src="/exit.png" alt="" />
              </Button>
            </div>
            {/* <div className={styles.modalNav}>
              <h2 className={styles.typeOfWork}>Вид работы </h2>
              <div className={styles.buttonWraper}>
                <Link href="/#accordion1" className={styles.modalNavBtn} onPress={() => handleButtonPress(1)}>Перепланировка нежилого помещения</Link>
                <Link href="/#accordion2" className={styles.modalNavBtn} onPress={() => handleButtonPress(2)}>Разделение нежилого помещения</Link>
                <Link href="/#accordion3" className={styles.modalNavBtn} onPress={() => handleButtonPress(3)}>Объединение нежилых помещений</Link>
                <Link href="/#accordion4" className={styles.modalNavBtn} onPress={() => handleButtonPress(4)}>Возведение 2-го этажа </Link>
                <Link href="/#accordion5" className={styles.modalNavBtn} onPress={() => handleButtonPress(5)}>Реконструкция фасада с добавлением входной группы либо пристройки</Link>
                <Link href="/#accordion6" className={styles.modalNavBtn} onPress={() => handleButtonPress(6)}>Изменение функционального назначения (целевое назначение помещения)</Link>
              </div> */}
              {/* <div className={styles.grayBlocksWraper}>
                <div className={styles.grayBlock}>Изменение функционального назначения (целевое назначение помещения) (<b>СКОРО</b>)</div>
                <div className={styles.grayBlock}>Реконструкция фасада с добавлением входной группы либо пристройки (<b>СКОРО</b>)</div>
                <div className={styles.grayBlock}>Возведение 2-го этажа (<b>СКОРО</b>)</div>
              </div> */}
            {/* </div> */}
          </div>
          <Accordion className={styles.accordionWraper} selectedKeys={expanded}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Перепланировка нежилого помещения" className={styles.accordion} id='accordion1' onPress={() => handleButtonPress(1)}>
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
                    <span>Стоимость работ</span>
                    <span>от 80 000 тенге.</span>
                    <span>* государственная пошлина за технический паспорт оплачивается заказчиком отдельно</span>
                    <Button className={styles.accordionBtn} onPress={() => sendMessage('Перепланировка нежилого помещения')}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Разделение нежилого помещения" className={styles.accordion} id='accordion2' onPress={() => handleButtonPress(2)}>
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
                    <span>Стоимость работ</span>
                    <span>от 150 000 тенге.</span>
                    <span>* в стоимость услуг не входит государственная пошлина за технический паспорт.</span>
                    <Button className={styles.accordionBtn} onPress={() => sendMessage('Разделение нежилого помещения')}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Объединение нежилых помещений" className={styles.accordion} id='accordion3' onPress={() => handleButtonPress(3)}>
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
                    <span>Стоимость работ</span>
                    <span>от 150 000 тенге.</span>
                    <span>* в стоимость услуг не входит государственная пошлина за технический паспорт.</span>
                    <Button className={styles.accordionBtn} onPress={() => sendMessage('Объединение нежилых помещений')}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Возведение 2-го этажа" className={styles.accordion} id='accordion4' onPress={() => handleButtonPress(4)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое возведение 2 уровня/этажа?</h2>
                  <span>Возведение второго уровня – это крайне эффективная и отличная идея для тех, кто хочет максимально полезно использовать площадь своего имущества. В основном Заказчиками по возведению 2 уровня, являются собственники нежилых помещений, где высота помещения позволит добавить/смонтировать второй этаж. Зачастую строительство осуществляется на основе антресольного этажа из металлических конструкций. Данный вид изменения конструктива является техническим сложным. Во-первых, необходимо получить разрешение на проектирование в Управлении архитектуры, во-вторых, дальнейшее строительство начинать после прохождения экспертизы, в-третьих, строительство осуществлять под  чутким авторским и техническим надзорами. Наша компания поможет в узаконении 2 уровня, начиная от Вашего замысла и заканчивая вводом в эксплуатацию!</span>
                </div>
                <div className={styles.steps}>
                  <div className={styles.preSteps}>
                    <h2>Этапы работы </h2>
                    <div className={styles.preStepsWraper}>
                      <div>Предварительная экспертиза</div>
                      <div>Заключение Договора</div>
                      <div>Набор технического проекта</div>
                      <div>Получения Решения и АПЗ с ГУ «УАГиЗО»</div>
                      <div>Прохождение частной вневедомственной экспертизы</div>
                      <div>Уведомления ГАСК о начале строительно-монтажных работ</div>
                      <div>Заполнение декларации о соответствии выполненных работ с коммунальными службами</div>
                      <div>Авторский надзор (заключение о выполненных работ по проекту)</div>
                      <div>Технический надзор (заключение о качестве строительно-монтажных работ)</div>
                      <div>Заказ технического паспорта</div>
                      <div>Заполнение актов ввода объекта в эксплуатацию</div>
                      <div>Регистрация актов ввода в уполномоченных государственных органах</div>
                    </div>
                  </div>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>55 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span>Стоимость работ</span>
                    <span>от 1 500 000 тенге.</span>
                    <Button className={styles.accordionBtn} onPress={() => sendMessage('Возведение 2-го этажа')}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title="Реконструкция фасада с добавлением входной группы либо пристройки" className={styles.accordion} id='accordion5' onPress={() => handleButtonPress(5)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое реконструкция фасада?</h2>
                  <span>Реконструкцией фасада называется изменения конструктивной части помещения, в части ограждающих конструкций, увеличение площади происходит за счет пристройки или входной группы. Не спешите добавлять входную группу без получения разрешения на проектирование, так как для его получения по действующему законодательству требуется не менее 70%  голосов от общего количества жильцов дома. Зачастую с замыслом строительства пристройки вытекает вопрос о земельном участке, находящемся под ней, он может находиться либо в государственной собственности, либо будет входить в участок общего пользования (кондоминиум).
                    Обращайтесь в нашу компанию за бесплатной консультацией и дальнейшим сотрудничеством.
                  </span>
                </div>
                <div className={styles.steps}>
                  <div className={styles.preSteps}>
                    <h2>Этапы работы </h2>
                    <div className={styles.preStepsWraper}>
                      <div>Предварительная экспертиза</div>
                      <div>Заключение Договора</div>
                      <div>Набор технического проекта</div>
                      <div>Получения Решения и АПЗ с ГУ «УАГиЗО»</div>
                      <div>Прохождение частной вневедомственной экспертизы</div>
                      <div>Уведомления ГАСК о начале строительно-монтажных работ</div>
                      <div>Заполнение декларации о соответствии выполненных работ с коммунальными службами</div>
                      <div>Авторский надзор (заключение о выполненных работ по проекту)</div>
                      <div>Технический надзор (заключение о качестве строительно-монтажных работ)</div>
                      <div>Заказ технического паспорта</div>
                      <div>Заполнение актов ввода объекта в эксплуатацию</div>
                      <div>Регистрация актов ввода в уполномоченных государственных органах</div>
                    </div>
                  </div>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>60 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span></span>
                    <span>Стоимость работ – по договоренности</span>
                    <Button className={styles.accordionBtn} onPress={() => sendMessage('Реконструкция фасада с добавлением входной группы либо пристройки')}>Заказать услугу</Button>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem key="6" aria-label="Accordion 6" title="Изменение функционального назначения (целевое назначение помещения)" className={styles.accordion} id='accordion6' onPress={() => handleButtonPress(6)}>
              <div className={styles.accordionBody}>
                <div className={styles.topBlock}>
                  <h2 className={styles.Accordion}>Что такое изменение функционального назначения (целевое назначение) помещения?</h2>
                  <span>Функицональное назначение нежилого помещения – это юридически-допустимое использование помещения в рамках его целевого назначения. Если вы приобрели помещение свободного назначения, а эксплуатируете его как медицинское учреждение, СТО, магазин и т.д., то возникает необходимость его изменения по фактическому целевому  использованию. В случае нахождения земельного участка под вашим помещением, процесс становится крайне тяжелым, так как в данном случае необходимо изменение целевого назначения земельного участка. Помимо этого для получения разрешения необходимо собрать согласие жильцов дома, если помещение находится в состве МЖК.
                  </span>
                </div>
                <div className={styles.steps}>
                  <div className={styles.preSteps}>
                    <h2>Этапы работы </h2>
                    <div className={styles.preStepsWraper}>
                      <div>Предварительная экспертиза</div>
                      <div>Заключение Договора</div>
                      <div>Набор технического проекта</div>
                      <div>Получения Решения и АПЗ с ГУ «УАГиЗО»</div>
                      <div>Прохождение частной вневедомственной экспертизы</div>
                      <div>Уведомления ГАСК о начале строительно-монтажных работ</div>
                      <div>Заполнение декларации о соответствии выполненных работ с коммунальными службами</div>
                      <div>Авторский надзор (заключение о выполненных работ по проекту)</div>
                      <div>Технический надзор (заключение о качестве строительно-монтажных работ)</div>
                      <div>Заказ технического паспорта</div>
                      <div>Заполнение актов ввода объекта в эксплуатацию</div>
                      <div>Регистрация актов ввода в уполномоченных государственных органах</div>
                    </div>
                  </div>
                  <div className={styles.step1}>
                    <span>Срок работы</span>
                    <span>60 рабочих дней</span>
                    <span>* с момента подписания договора</span>
                  </div>
                  <div className={styles.step2}>
                    <span></span>
                    <span>Стоимость работ – по договоренности</span>
                    <Button className={styles.accordionBtn} onPress={() => sendMessage('Изменение функционального назначения (целевое назначение помещения) ')}>Заказать услугу</Button>
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