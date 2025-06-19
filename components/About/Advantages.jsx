import React from 'react'

const Advantages = () => {
    return (
        <section className='containerCustom p-21'>
            <h2 className='sectionTitle'>
                Преимущества
            </h2>
            <div className='advantagesWrapper'>
                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/docs.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Документы:</span>
                        <span>только Удостоверение личности</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/time.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Рассрочка:</span>
                        <span>до 10-ти лет</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/hand.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Первоначальный взнос:</span>
                        <span>от 35% от стоимости квартиры</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/keys.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Приобретение квартиры:</span>
                        <span>В порядке очереди</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/money.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Выплаты:</span>
                        <span>без кредитной истории</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/calc.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Рассчет стоимости ОН</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/sale.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Минимальная переплата:</span>
                        <span>0%</span>
                    </div>
                </div>

                <div className='advantagesBlock'>
                    <div className='iconsBlock'>
                        <img src="/iconItems/stop.gif" alt="" />
                    </div>
                    <div className='advantagesInfo'>
                        <span>Подтверждение доходов:</span>
                        <span>Не требуется</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages