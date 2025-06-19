import React from 'react'

const MapDesc = () => {
    return (
        <div className='mapDesc'>
            <div className='mapDescComponent'>
                <div className='mapDescComponentTitle'>
                    График работы
                </div>
                <div className='mapDescInfoWrapper'>
                    <div className='mapDescInfo'>
                        <img src="/iconItems/cal.png" alt="" />
                        <span>ПН - ПТ с 09:00 по 18:00</span>
                    </div>
                    <div className='mapDescInfo'>
                        <img src="/iconItems/cal.png" alt="" />
                        <span>СБ - ВС</span>
                    </div>
                </div>
            </div>

             <div className='mapDescComponent'>
                <div className='mapDescComponentTitle'>
                    Как с нами связаться
                </div>
                <div className='mapDescInfoWrapper'>
                    <div className='mapDescInfo'>
                        <img src="/iconItems/whatsapp.png" alt="" />
                        <span>+7 775 113 6940</span>
                    </div>
                    <div className='mapDescInfo'>
                        <img src="/iconItems/phone.png" alt="" />
                        <span>+77719499185 </span>
                    </div>
                </div>
            </div>

             <div className='mapDescComponent'>
                <div className='mapDescComponentTitle'>
                    График работы
                </div>
                <div className='mapDescInfoWrapper'>
                    <div className='mapDescInfo'>
                        <img src="/iconItems/inst.png" alt="" />
                        <span>Instagram</span>
                    </div>
                    <div className='mapDescInfo'>
                        <img src="/iconItems/tiktoc.png" alt="" />
                        <span>Tik-Tok</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapDesc