import { Button } from '@heroui/react'
import React from 'react'

const DescAbout = () => {
    return (
        <div className='descComponent'>
            <h1>
                О нашем потребительском
                кооперативе
            </h1>
            <h2>
                Надёжное сообщество членов кооперативов, строящее своё будущее
            </h2>
            <Button className='lightBtn'>
                Рассчет стоимости ОН
            </Button>
            <span className='text-white'>
                *ОН - объект недвижимости
            </span>
        </div>
    )
}

export default DescAbout