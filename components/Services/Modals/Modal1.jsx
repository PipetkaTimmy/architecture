import React, { useState } from 'react'
import { Modal, ModalContent, Button, Accordion, AccordionItem } from "@nextui-org/react";
import styles from '../services.module.css'
import Link from 'next/link';

const Modal1 = ({ isOpen, onClose, }) => {
    const [expanded, setExpanded] = useState([]);

    const handleButtonClick = (item) => {
        setExpanded([`${item}`]);
    };

    return (
        <Modal size='full' isOpen={isOpen} onClose={onClose}>
            <ModalContent className={[styles.modalBg, styles.modalContainer]}>
                <div className={styles.fixedImg}>
                    <img src="/modal/1.png" alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.fixedImgMob}>
                        <img src="/modal/1.png" alt="" />
                    </div>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalTitle}>Узаконение квартир</h2>
                        <div className={styles.modalNav}>
                            <h2 className={styles.typeOfWork}>Вид работы </h2>
                            <div className={styles.buttonWraper}>
                                <Link href="/#accordion1" className={styles.modalNavBtn} onClick={() => handleButtonClick(1)}>Набор актов ввода в эксплуатацию</Link>
                                <Link href="/#accordion2" className={styles.modalNavBtn} onClick={() => handleButtonClick(2)}>Перепланировка</Link>
                                <Link href="/#accordion3" className={styles.modalNavBtn} onClick={() => handleButtonClick(3)}>Переоборудование</Link>
                                <Link href="/#accordion4" className={styles.modalNavBtn} onClick={() => handleButtonClick(4)}>Присоединение балкона/ лоджии в полезную площадь квартиры</Link>
                                <Link href="/#accordion5" className={styles.modalNavBtn} onClick={() => handleButtonClick(5)}>Объединение квартир</Link>
                                <Link href="/#accordion6" className={styles.modalNavBtn} onClick={() => handleButtonClick(6)}>Разделение квартир</Link>
                            </div>
                            <div className={styles.grayBlocksWraper}>
                                <div className={styles.grayBlock}>Перевод в нежилой фонд с отдельным входом при необходимости (<b>СКОРО</b>)</div>
                                <div className={styles.grayBlock}>Захват общей части кондоминиума (часть подъезда включена в площадь квартиры) (<b>СКОРО</b>)</div>
                            </div>
                        </div>
                    </div>
                    <Accordion className={styles.accordionWraper} selectedKeys={expanded}>
                        <AccordionItem key="1" aria-label="Accordion 1" title="Набор актов ввода в эксплуатацию" className={styles.accordion} id='accordion1' onClick={() => handleButtonClick(1)}>
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
                                        <span>Срок работы</span>
                                        <span>от 10 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Перепланировка" className={styles.accordion} id='accordion2' onClick={() => handleButtonClick(2)}>
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
                                        <span>Срок работы</span>
                                        <span>от 60 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Переоборудование" className={styles.accordion} id='accordion3' onClick={() => handleButtonClick(3)}>
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
                                        <span>Срок работы</span>
                                        <span>от 70 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 3" title="Присоединение балкона/ лоджии в полезную площадь квартиры" className={styles.accordion} id='accordion4' onClick={() => handleButtonClick(4)}>
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
                                        <span>Срок работы</span>
                                        <span>от 70 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="5" aria-label="Accordion 3" title="Объединение квартир" className={styles.accordion} id='accordion5' onClick={() => handleButtonClick(5)}>
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
                                        <span>Срок работы</span>
                                        <span>от 150 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
                                        <Button className={styles.accordionBtn}>Заказать услугу</Button>
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="6" aria-label="Accordion 3" title="Разделение квартир" className={styles.accordion} id='accordion6' onClick={() => handleButtonClick(6)}>
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
                                        <span>Срок работы</span>
                                        <span>от 160 000 тенге.</span>
                                        <span>*стоимость рассчитывается от сложности и квадратуры объекта</span>
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

export default Modal1