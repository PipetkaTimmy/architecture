'use client';
import React, { useState, useEffect } from 'react';
import { Input, Button } from '@heroui/react';
import InputMask from 'react-input-mask';
import ContactMap from '@/components/Contacts/ContactMap';
import { useLanguage } from '@/contexts/LanguageContext';
import loadTranslations from '@/utils/getTranslations';

const ContactPage = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});
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

  useEffect(() => {
    const fetchTranslations = async () => {
      const trans = await loadTranslations('Contacts', language);
      setTranslations(trans);
    };
    fetchTranslations();
  }, [language]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', city: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = translations.Contacts?.form.nameError || 'Имя обязательно';
      isValid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = translations.Contacts?.form.cityError || 'Город обязателен';
      isValid = false;
    }
    if (!formData.phone || !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      newErrors.phone = translations.Contacts?.form.phoneError || 'Введите корректный номер телефона';
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

    const message = `Имя: ${formData.name}%0AГород: ${formData.city}%0AТелефон: ${formData.phone}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=77751136940&text=${message}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', city: '', phone: '' });
  };

  const isFormValid =
    formData.name.trim() &&
    formData.city.trim() &&
    formData.phone.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/);

  return (
    <section className="containerCustom p-21">
      <h2 className="sectionTitle">{translations.Contacts?.title || 'Наши каналы связи'}</h2>
      <div className="aboutBlock">
        <div className="aboutBlockText">
          <div>{translations.Contacts?.description || 'Оставьте заявку — объясним, какие документы нужны, как проходит сделка и что вы получите в итоге.'}</div>
          <div className="inputGroups">
            <div>
              <Input
                label={translations.Contacts?.form.nameLabel || 'Введите ваше имя'}
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
                label={translations.Contacts?.form.cityLabel || 'Введите ваш город'}
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
                    label={translations.Contacts?.form.phoneLabel || 'Введите ваш номер телефона'}
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
            {translations.Contacts?.form.submitButton || 'Узнать подробнее'}
          </Button>
        </div>
        <div className="contactImg">
          <img src="/baner3.jpg" alt="" />
        </div>
      </div>
      <ContactMap />
      <div className="contactBlocks">
        {(translations.Contacts?.contacts || [
          { title: 'Электронная почта', value: 'pk.ubwkz@gmail.com' },
          { title: 'Номер телефона', value: '+77719499185' },
          { title: 'WhatsApp', value: '+7 775 113 6940' },
          { title: 'Адрес офиса', value: 'г. Астана, ​БЦ Нұр Тау, Проспект Республики, 34а, офис 609 и 610; 6 этаж' },
        ]).map((contact, index) => (
          <div key={index} className="contactBlock">
            <span>{contact.title}</span>
            <span className={contact.title === 'Адрес офиса' ? 'adress' : 'adress'}>{contact.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;