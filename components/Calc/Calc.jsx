import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import styles from "./calc.module.css";

const googleSheetsUrl = "https://script.google.com/macros/s/AKfycbxOWMu6XIU-edspzCBhuzzNeFXl1tlqQ3xW_FMMNEFUmAj56IqLnladiTC0bR_Q3P49FQ/exec";

const Calc = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [object, setObject] = useState("");
    const [service, setService] = useState("");
    const [work, setWork] = useState("");
    const [area, setArea] = useState("");
    const [works, setWorks] = useState(null);
    const [errors, setErrors] = useState({
        name: false,
        phoneNumber: false,
        object: false,
        service: false,
        work: false,
        area: false,
    });
    const [touched, setTouched] = useState(false);

    const isFormValid = () => {
        return name && phoneNumber && object && service && work && area;
    };

    const buttonClass = isFormValid() ? styles.buttonActive : styles.buttonInactive;

    const objects = ["Квартира", "Жилой дом (хоз. постройки)", "Коммерческое помещение (н.п., в.п.)", "Иное"];
    const services = ["Узаконение квартир", "Жилой дом и хозяйственно-бытовые постройки", "Проектирование", "Коммерческие помещения", "Юридическое сопровождение"];
    const apartment_legalization = ["Набор актов ввода в эксплуатацию", "Перепланировка", "Присоединение балкона/ лоджии в полезную площадь квартиры", "Объединение квартир", "Разделение квартир"];
    const residential_buildings_and_household_structures = ["Перепланировка и переоборудование жилого дома и хоз.бытовых построек", "Разделение жилого дома", "Узаконение сноса", "Узаконение нового строительства"];
    const design = ["Технический проект", "Эскизный проект"];
    const commercial_premises = ["Перепланировка нежилого помещения", "Разделение нежилого помещения", "Объединение нежилых помещений"];
    const legal_support = [
        "Сопровождение по земельным отношениям",
        "Предоставления аренды земельного участка (без участия на торгах)",
        "Продление аренды земельного участка",
        "Выделение долей земельного участка",
        "Сопровождение по получению разрешительных документов на проектирование и строительство",
        "Сопровождение по прохождению частной вневедомственной экспертиза",
        "Сопровождение по вводу объекта в эксплуатацию и его сносу",
        "Заполнение декларации о соответствии выполненных работ",
    ];

    const handleSelectionChange = (e) => {
        setTouched(true);
        setService(e.target.value);
        switch (e.target.value) {
            case "Узаконение квартир":
                setWorks(apartment_legalization);
                break;
            case "Жилой дом и хозяйственно-бытовые постройки":
                setWorks(residential_buildings_and_household_structures);
                break;
            case "Проектирование":
                setWorks(design);
                break;
            case "Коммерческие помещения":
                setWorks(commercial_premises);
                break;
            case "Юридическое сопровождение":
                setWorks(legal_support);
                break;
            default:
                setWorks([]);
                break;
        }
    };

    const handleSubmit = async () => {
        const newErrors = {};
        let hasError = false;

        if (!name) {
            newErrors.name = true;
            hasError = true;
        }
        if (!phoneNumber) {
            newErrors.phoneNumber = true;
            hasError = true;
        }
        if (!object) {
            newErrors.object = true;
            hasError = true;
        }
        if (!service) {
            newErrors.service = true;
            hasError = true;
        }
        if (!work) {
            newErrors.work = true;
            hasError = true;
        }
        if (!area) {
            newErrors.area = true;
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        const formData = {
            name,
            phoneNumber,
            object,
            service,
            work,
            area,
        };

        try {
            const response = await fetch(googleSheetsUrl, {
                redirect: "follow",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Ошибка при отправке данных в Google Таблицы");
            }
            alert('Заявка отправлена, с Вами свяжутся в ближайшее время')

        } catch (error) {
            alert('Заявка отправлена, с Вами свяжутся в ближайшее время')
        }
    };

    return (
        <section className="container" id="calc">
            <div className={styles.calcContainer}>
                <img src="/calc.png" alt="" />
                <div className={styles.inputContainer}>
                    <h1 className={styles.calcTitle}>Расчет стоимости</h1>
                    <div className={styles.inputWraper}>
                        <Input
                            type="text"
                            label="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={errors.name ? "Поле не заполнено" : ""}
                            isRequired
                        />
                        <Input
                            type="tel"
                            label="Номер телефона"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            error={errors.phoneNumber ? "Поле не заполнено" : ""}
                            isRequired
                        />
                        <Select
                            label="Объект"
                            value={object}
                            onChange={(e) => setObject(e.target.value)}
                            errorMessage={!object && touched ? "Поле не заполнено" : ""}
                            isInvalid={!object && touched ? true : false}
                            isRequired
                            className={styles.colorBlack}
                        >
                            {objects.map((object) => (
                                <SelectItem key={object} value={object} className={styles.colorBlack}>
                                    {object}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select
                            label="Услуга"
                            isRequired
                            onChange={handleSelectionChange}
                            errorMessage={!service && touched ? "Поле не заполнено" : ""}
                            isInvalid={!service && touched ? true : false}
                            className={styles.colorBlack}
                        >
                            {services.map((service) => (
                                <SelectItem key={service} value={service} className={styles.colorBlack}>
                                    {service}
                                </SelectItem>
                            ))}
                        </Select>
                        {works && (
                            <Select
                                label="Вид работы"
                                isRequired
                                onChange={(e) => setWork(e.target.value)}
                                errorMessage={!work && touched ? "Поле не заполнено" : ""}
                                isInvalid={!work && touched ? true : false}
                            >
                                {works.map((workOption) => (
                                    <SelectItem key={workOption} value={workOption} className={styles.colorBlack}>
                                        {workOption}
                                    </SelectItem>
                                ))}
                            </Select>
                        )}
                        <Input
                            type="number"
                            label="Площадь"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            error={errors.area ? "Поле не заполнено" : ""}
                        />
                    </div>
                    <Button className={buttonClass} onPress={handleSubmit}>
                        Отправить
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Calc;