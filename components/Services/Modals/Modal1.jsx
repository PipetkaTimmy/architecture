import React, { useState } from 'react'
import { Modal, ModalContent, Button, Accordion, AccordionItem } from "@nextui-org/react";
import styles from '../services.module.css'
import Link from 'next/link';

const Modal1 = ({ isOpen, onClose, }) => {
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
        const message = `Здравсвуйте, я интересуюсь услугой "${title}".%0aЯ хотел(а) бы узнать больше о данной услуге. Не могли бы вы подробнее рассказать о том, что вы предлагаете?`;
        const whatsappLink = `${baseURL}${phone}/?text=${message}`;

        window.open(whatsappLink, '_blank');
    }

    return (
        <Modal size='full' isOpen={isOpen}>
            <ModalContent className={[styles.modalBg, styles.modalContainer]}>
                <div className={styles.fixedImg}>
                    <img src="/modal/1.png" alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.fixedImgMob}>
                        <img src="/modal/1.png" alt="" />
                    </div>
                    <div className={styles.modalHeader}>
                        <div className={styles.headerContainer}>
                            <h2 className={styles.modalTitle}>Узаконение квартир</h2>
                            <Button className={styles.closeBtnModal} isIconOnly onPress={() => onClose()}>
                                <img src="/exit.png" alt="" />
                            </Button>
                        </div>
                        {/* <div className={styles.modalNav}>
                            <h2 className={styles.typeOfWork}>Вид работы </h2>
                            <div className={styles.buttonWraper}>
                                <Link href="/#accordion1" className={styles.modalNavBtn} onPress={() => handleButtonPress(1)}>Набор актов ввода в эксплуатацию</Link>
                                <Link href="/#accordion2" className={styles.modalNavBtn} onPress={() => handleButtonPress(2)}>Перепланировка</Link>
                                <Link href="/#accordion3" className={styles.modalNavBtn} onPress={() => handleButtonPress(3)}>Переоборудование</Link>
                                <Link href="/#accordion4" className={styles.modalNavBtn} onPress={() => handleButtonPress(4)}>Присоединение балкона/ лоджии в полезную площадь квартиры</Link>
                                <Link href="/#accordion5" className={styles.modalNavBtn} onPress={() => handleButtonPress(5)}>Объединение квартир</Link>
                                <Link href="/#accordion6" className={styles.modalNavBtn} onPress={() => handleButtonPress(6)}>Разделение квартир</Link>
                                <Link href="/#accordion7" className={styles.modalNavBtn} onPress={() => handleButtonPress(7)}>Перевод в нежилой фонд с отдельным входом при необходимости</Link>
                                <Link href="/#accordion8" className={styles.modalNavBtn} onPress={() => handleButtonPress(8)}>Переоборудование нежилого помещения в квартиру</Link>
                                <Link href="/#accordion9" className={styles.modalNavBtn} onPress={() => handleButtonPress(9)}>Захват общей площади  кондоминиума</Link>
                            </div> */}
                            {/* <div className={styles.grayBlocksWraper}>
                                <div className={styles.grayBlock}>Перевод в нежилой фонд с отдельным входом при необходимости (<b>СКОРО</b>)</div>
                                <div className={styles.grayBlock}>Переоборудование нежилого помещения в квартиру (<b>СКОРО</b>)</div>
                            </div> */}
                        {/* </div> */}
                    </div>
                    <Accordion className={styles.accordionWraper} selectedKeys={expanded}>
                        <AccordionItem key="1" aria-label="Accordion 1" title="Набор актов ввода в эксплуатацию" className={styles.accordion} id='accordion1' onPress={() => handleButtonPress(1)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое набор актов ввода в эксплуатацию?</h2>
                                    <span>Акты ввода (приемки) объекта в эксплуатацию представляют собой оконченные мероприятия по ремонту отраженные на бумажном носителе и заполненные согласно правилам установленным государственным органом. Является заключительным документом при первичной регистрации недвижимости (новое строительство) или его изменений (перепланировка, переоборудование, реконструкция и т.д.).  </span>
                                    <span>В случае если вы сделали ремонт в квартире, после которого получили технический паспорт с определенным заключением "Перепланировка" либо "Переоборудование" мы подготовим вам акт в течение 1-го часа , который в последующем нужно будет подать на регистрацию. Оставляйте заявку!</span>
                                </div>
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>1 рабочий день</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span>Стоимость работ</span>
                                        <span>от 10 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Набор актов ввода в эксплуатацию')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Перепланировка" className={styles.accordion} id='accordion2' onPress={() => handleButtonPress(2)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое перепланировка?</h2>
                                    <span>Это изменение конфигурации квартиры требующее внесения изменения в технический паспорт для дальнейшего ввода в эксплуатацию.  </span>
                                    <span>Мы специализируемся на разнообразных видах перепланировок, включая изменения планировочных решений, перенос стен, установку/удаление перегородок и многих других технических и дизайнерских изменений.</span>
                                </div>
                                <div className={styles.preSteps}>
                                    <h2>Этапы работы </h2>
                                    <div className={styles.preStepsWraper}>
                                        <div>Набор технического проекта (в случае если квартира находится в залоге/ипотеке)</div>
                                        <div>Заказ технического паспорта и согласование его с заказчиком</div>
                                        <div>Набор актов ввода собственником самостоятельно</div>
                                        <div>Регистрация в уполномоченных государственных органах с последующей сверкой документов</div>
                                        <div>Доставка документов на дом, либо отправка курьером</div>
                                    </div>
                                </div>
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>7 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span>Стоимость работ</span>
                                        <span>от 60 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Перепланировка')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Переоборудование" className={styles.accordion} id='accordion3' onPress={() => handleButtonPress(3)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое переоборудование?</h2>
                                    <span>Переоборудование - это установка, замена или перенос инженерных сетей,коммуникаций, требующих внесения изменений в технический паспорт квартиры в многоквартирном жилом доме для дальнейшего ввода в эксплуатацию. Например, когда санузел переносят в другое помещение квартиры, либо переводят коммуникации кухни в жилую комнату, что в обиходе называют «евро-двушкой.</span>
                                </div>
                                <div className={styles.preSteps}>
                                    <h2>Этапы работы </h2>
                                    <div className={styles.preStepsWraper}>
                                        <div>Набор технического проекта (в случае если квартира находится в залоге/ипотеке)</div>
                                        <div>Заказ технического паспорта и согласование его с заказчиком</div>
                                        <div>Набор актов ввода собственником самостоятельно</div>
                                        <div>Регистрация в уполномоченных государственных органах с последующей сверкой документов</div>
                                        <div>Доставка документов на дом либо отправка курьером</div>
                                    </div>
                                </div>
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>7 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span>Стоимость работ</span>
                                        <span>от 70 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Переоборудование')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 3" title="Присоединение балкона/ лоджии в полезную площадь квартиры" className={styles.accordion} id='accordion4' onPress={() => handleButtonPress(4)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое присоединение балкона/ лоджии в полезную площадь квартиры?</h2>
                                    <span>Балкон или лоджию в техническом плане можно использовать не только для хранения вещей хозяйственного назначения. На утепленном балконе/лоджии можно сделать переустройство в место отдыха, продолжении кухни, расположить рабочий кабинет и осуществить прочие работы, исходя из желаний собственника квартиры, за счет сноса ограждающей перегородки часть площади балкона будет входить в общую площадь квартиры.</span>
                                    <div>
                                        *наличие более одного балкона или лоджии не препятствует их присоединению к площади квартиры.
                                    </div>
                                </div>
                                <div className={styles.preSteps}>
                                    <h2>Этапы работы </h2>
                                    <div className={styles.preStepsWraper}>
                                        <div>Набор технического проекта (в случае если квартира находится в залоге/ипотеке)</div>
                                        <div>Заказ технического паспорта и согласование его с заказчиком</div>
                                        <div>Набор актов ввода собственником самостоятельно</div>
                                        <div>Регистрация в уполномоченных государственных органах с последующей сверкой документов</div>
                                        <div>Доставка документов на дом либо отправка курьером</div>
                                    </div>
                                </div>
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>7 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span>Стоимость работ</span>
                                        <span>от 70 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Присоединение балкона/ лоджии в полезную площадь квартиры')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="5" aria-label="Accordion 3" title="Объединение квартир" className={styles.accordion} id='accordion5' onPress={() => handleButtonPress(5)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое Объединение квартир? </h2>
                                    <span>В случае наличия у собственника 2 (двух) и более квартир, он может их объединить, как на одном этаже, так и на разных этажах, для этого необходимо разработать технический проект и в случае необходимости согласовать его в уполномоченном органе, соблюдая все нормы и стандарты в строительстве. Для этого вы можете обратиться к нам.</span>
                                </div>
                                <div className={styles.preSteps}>
                                    <h2>Этапы работы </h2>
                                    <div className={styles.preStepsWraper}>
                                        <div>Предварительная экспертиза (выезд на объект в случае необходимости и оценка о возможности объединения квартир)</div>
                                        <div>Разработка технического проекта</div>
                                        <div>Согласование в управлении архитектуры (в случае если объединение происходит на разных этажах)</div>
                                        <div>Присвоение адреса на объединенную квартиру</div>
                                        <div>Заказ нового технического паспорта и согласование его с Заказчиком</div>
                                        <div>Набор актов ввода в эксплуатацию</div>
                                        <div>Регистрация в уполномоченных государственных органах с дальнейшей сверкой документов</div>
                                        <div>Доставка документов на дом либо отправка курьером</div>
                                    </div>
                                </div>
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>14 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span>Стоимость работ</span>
                                        <span>от 150 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Разделение квартир')} >Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="6" aria-label="Accordion 3" title="Разделение квартир" className={styles.accordion} id='accordion6' onPress={() => handleButtonPress(6)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое Разделение квартир?  </h2>
                                    <span>Разделение квартиры является технически сложным видом перепланировки, так как меняются границы помещения (ограждающие конструкции) и помимо этого она сопровождается переоборудованием. Однако, это не невозможно, наша команда поможет вам с желанием разделить жилое помещение на две.</span>
                                </div>
                                <div className={styles.preSteps}>
                                    <h2>Этапы работы </h2>
                                    <div className={styles.preStepsWraper}>
                                        <div>Предварительная экспертиза (выедем на объект в случае необходимости и дадим оценку о возможности объединения квартир)</div>
                                        <div>Разработка технического проекта на разделение</div>
                                        <div>Присвоение адреса на разделенные квартиры</div>
                                        <div>Заказ технических паспортов и согласование их с Заказчиком</div>
                                        <div>Набор актов ввода эксплуатацию</div>
                                        <div>Регистрация в уполномоченных государственных, с дальнейшей сверкой документов</div>
                                        <div>Доставка документов на дом, либо отправим курьером</div>
                                    </div>
                                </div>
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>14 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span>Стоимость работ</span>
                                        <span>от 160 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Разделение квартир')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="7" aria-label="Accordion 3" title="Перевод в нежилой фонд с отдельным входом при необходимости" className={styles.accordion} id='accordion7' onPress={() => handleButtonPress(7)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое переоборудование квартиры в нежилой фонд?  </h2>
                                    <span>Переоборудование квартиры в нежилое помещение является технически сложной операцией. В данном случае затрагиваются инженерные коммуникации, так как изменяется функциональное назначения. Для его изменения необходимо получить согласия жильцов дома, разработать технический проект и получить разрешение от местного исполнительного органа. В случае, если есть замысел пристроить входную часть группы, то процесс становится сложнее, ввиду получения земельного участка под входную группу.</span>
                                </div>
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
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>60 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span></span>
                                        <span></span>
                                        <span>Стоимость работ – по договоренности</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Переоборудование квартиры в нежилое помещение')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="8" aria-label="Accordion 3" title="Переоборудование нежилого помещения в квартиру" className={styles.accordion} id='accordion8' onPress={() => handleButtonPress(8)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое переоборудование нежилого помещения в квартиру?</h2>
                                    <span>Переоборудование нежилого помещения к квартире также является технически сложным объектом, за счет изменения функционального назначения (изменение инженерных систем и коммуникаций). Общая квадратура нежилого помещения не должна быть ниже 28 кв.м. – это является императивным требованием. В данном случае также необходимо согласие не менее 70% жильцов дома, разрешение на проектирование, экспертиза. Наша команда сможет без труда помочь в вашем вопросе узаконения.</span>
                                </div>
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
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>55 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span></span>
                                        <span></span>
                                        <span>Стоимость работ – от 700 000 (семиста тысяч) тенге</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Переоборудование нежилого помещения в квартиру')}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="9" aria-label="Accordion 3" title="Захват общей площади  кондоминиума" className={styles.accordion} id='accordion9' onPress={() => handleButtonPress(9)}>
                            <div className={styles.accordionBody}>
                                <div className={styles.topBlock}>
                                    <h2 className={styles.Accordion}>Что такое захват общей площади  кондоминиума(часть подъезда включена в площадь квартиры)?</h2>
                                    <span>В данном случае расширение территории происходит за счет изменения ограждающей конструкции. Часть площади подъезда присоединяется к площади квартиры, есть предел присоединения – нельзя захватывать лифтовую/лестничную часть, также электролический щиток недопустим к присоедению к квартире. Перед началом строительства требуется собрать согласие жильцов жилого дома, разработать технический проект и получить Решение с Управления архитектуры, градостроительства и земельных отношений, в дальнейшем пройти экспертизу и вводить в эксплуатацию. Обращайтесь за бесплатной консультацией в NOMAD!</span>
                                </div>
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
                                <div className={styles.steps}>
                                    <div className={styles.step1}>
                                        <span>Срок работы</span>
                                        <span>55 рабочих дней</span>
                                        <span>* с момента подписания договора</span>
                                    </div>
                                    <div className={styles.step2}>
                                        <span></span>
                                        <span></span>
                                        <span>Стоимость работ – от 700 000 (семиста тысяч) тенге</span>
                                        <Button className={styles.accordionBtn} onPress={() => sendMessage('Переоборудование нежилого помещения в квартиру')}>Заказать услугу</Button>
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

export default Modal1