'use client';
import React, { useState } from 'react';
import { Input, Button } from '@heroui/react';
import InputMask from 'react-input-mask';
import ContactMap from '@/components/Contacts/ContactMap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    city: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очищаем ошибку при изменении поля
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', city: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
      isValid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Город обязателен';
      isValid = false;
    }
    if (!formData.phone || !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Формируем сообщение для WhatsApp
    const message = `Имя: ${formData.name}%0AГород: ${formData.city}%0AТелефон: ${formData.phone}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=77751136940&text=${message}`;

    // Открываем WhatsApp в новой вкладке
    window.open(whatsappUrl, '_blank');

    // Сбрасываем форму после отправки
    setFormData({ name: '', city: '', phone: '' });
  };

  const isFormValid = formData.name.trim() && formData.city.trim() && formData.phone.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/);

  return (
    <section className="containerCustom p-21">
      <h2 className="sectionTitle">Наши каналы связи</h2>
      <div className="aboutBlock">
        <div className="aboutBlockText">
          <div>
            Оставьте заявку — объясним, какие документы нужны, как проходит сделка и что вы получите в итоге.
          </div>
          <div className="inputGroups">
            <div>
              <Input
                label="Введите ваше имя"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              {errors.name && <span className="errorText">{errors.name}</span>}
            </div>
            <div>
              <Input
                label="Введите ваш город"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                error={errors.city}
              />
              {errors.city && <span className="errorText">{errors.city}</span>}
            </div>
            <div>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
              >
                {(inputProps) => (
                  <Input
                    label="Введите ваш номер телефона"
                    type="text"
                    {...inputProps}
                    error={errors.phone}
                  />
                )}
              </InputMask>
              {errors.phone && <span className="errorText">{errors.phone}</span>}
            </div>
          </div>
          <Button
            className="wpBtn"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Узнать подробнее
          </Button>
        </div>
        <div className="contactImg">
          <img src="/baner3.jpg" alt="" />
        </div>
      </div>
      <ContactMap />
      <div className="contactBlocks">
        <div className="contactBlock">
          <span>Электронная почта</span>
          <span>pk.ubwkz@gmail.com</span>
        </div>
        <div className="contactBlock">
          <span>Номер телефона</span>
          <span>+77719499185</span>
        </div>
        <div className="contactBlock">
          <span>WhatsApp</span>
          <span>+7 775 113 6940</span>
        </div>
        <div className="contactBlock">
          <span>Адрес офиса</span>
          <span className="adress">
            г.Астана, ​БЦ Нұр Тау, Проспект Республики, 34а, офис 609 и 610; 6 этаж
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;