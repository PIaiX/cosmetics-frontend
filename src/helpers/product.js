// value - цена, currency - выводить валюту (true|false))
const customPrice = (value, currency = true) => {
    if (!value) {
        return null
    }
    value = parseInt(value).toLocaleString()
    if (currency) {
        value = value + ' ₽'
    }
    return value
}

export {customPrice}
