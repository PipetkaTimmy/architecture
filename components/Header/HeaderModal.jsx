import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
} from '@heroui/react';
import InputMask from 'react-input-mask';
import styles from './header.module.css';

const HeaderModal = ({ isOpen, onOpenChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        setError('');
        setSuccess('');
        setIsLoading(true);

        // Валидация
        if (!formData.name || !formData.phone || !formData.service) {
            setError('Пожалуйста, заполните все поля');
            setIsLoading(false);
            return;
        }

        const phoneDigits = formData.phone.replace(/[^\d]/g, '');
        if (phoneDigits.length < 10) {
            setError('Номер телефона должен содержать минимум 10 цифр');
            setIsLoading(false);
            return;
        }

        try {
            // 1. Создание контакта
            const contactResponse = await fetch(
                'https://nomadstroyproject.bitrix24.kz/rest/11/uy2i3zzxsiby02fe/crm.contact.add.json',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fields: {
                            NAME: formData.name,
                            PHONE: [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }],
                        },
                        params: { REGISTER_SONET_EVENT: 'Y' },
                    }),
                }
            );

            if (!contactResponse.ok) {
                const errorData = await contactResponse.json();
                throw new Error(
                    errorData.error_description || `HTTP ошибка при создании контакта: ${contactResponse.status}`
                );
            }

            const contactResult = await contactResponse.json();
            if (contactResult.error) {
                throw new Error(contactResult.error_description || 'Ошибка при создании контакта');
            }

            const contactId = contactResult.result;

            // 2. Создание сделки
            const dealResponse = await fetch(
                'https://nomadstroyproject.bitrix24.kz/rest/11/sxm3ewd13zgthx3p/crm.deal.add.json',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fields: {
                            TITLE: `Заявка с сайта от ${formData.name}`,
                            CONTACT_ID: contactId,
                            UF_CRM_1743508053959: 55,
                            PHONE: [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }],
                            COMMENTS: `Запрашиваемая услуга: ${formData.service}`,
                        },
                        params: { REGISTER_SONET_EVENT: 'Y' },
                    }),
                }
            );

            if (!dealResponse.ok) {
                const errorData = await dealResponse.json();
                throw new Error(
                    errorData.error_description || `HTTP ошибка при создании сделки: ${dealResponse.status}`
                );
            }

            const dealResult = await dealResponse.json();
            if (dealResult.error) {
                throw new Error(dealResult.error_description || 'Ошибка при создании сделки');
            }

            setSuccess('Заявка успешно отправлена! Мы скоро свяжемся с вами.');
            setFormData({ name: '', phone: '', service: '' });

            // Закрытие модалки через 3 секунды
            setTimeout(() => {
                setSuccess(''); // Сбрасываем успех
                onOpenChange(false); // Закрываем модалку
            }, 3000);
        } catch (err) {
            setError(`Не удалось отправить заявку: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className={styles.colorBlack}>
                            Оставь заявку на консультацию
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                label="Имя"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                value={formData.phone}
                                onChange={handleInputChange}
                                name="phone"
                                required
                            >
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        label="Номер телефона"
                                        type="tel"
                                        placeholder="+7 (XXX) XXX-XX-XX"
                                    />
                                )}
                            </InputMask>
                            <Input
                                label="Запрашиваемая услуга"
                                name="service"
                                type="text"
                                value={formData.service}
                                onChange={handleInputChange}
                                required
                            />
                            {error && <p className={styles.error}>{error}</p>}
                            {success && <p className={styles.success}>{success}</p>}
                            <Button
                                className={styles.headerModalBtn}
                                onPress={handleSubmit}
                                isDisabled={isLoading}
                            >
                                {isLoading ? 'Отправка...' : 'Оставить заявку'}
                            </Button>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default HeaderModal;