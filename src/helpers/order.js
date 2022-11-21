import React from 'react'

const paymentText = (value) => {
    let data = {
        card: 'Банковской картой',
        cash: 'Наличный расчет',
        online: 'Онлайн оплата',
        ip: 'Расчетный счет',
    }
    return data[value] ?? data['card']
}
const deliveryText = (value) => {
    let data = {
        0: {text: 'В обработке', color: 'text-white'},
        1: {text: 'Доставлено', color: 'text-success'},
        2: {text: 'Отменено', color: 'text-danger'},
        3: {text: 'Производится доставка', color: 'text-white'},
        4: {text: 'Выдано', color: 'text-white'},
    }
    let info = data[value] ?? data[0]
    return <span className={info.color}>{info.text}</span>
}

export {paymentText, deliveryText}
