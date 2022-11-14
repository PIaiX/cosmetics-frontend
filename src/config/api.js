const BASE_URL = process.env.REACT_APP_BASE_URL

const apiRoutes = {}

const apiResponseMessages = {}

const apiRejectMessages = {
    DEFAULT: 'Что-то пошло не так, повторите попытку позже',
    PAGE_ERROR: 'Не удалось загрузить страницу, вернитесь назад или перезагрузите страницу',
}

const apiErrors = {}

export {BASE_URL, apiRoutes, apiResponseMessages, apiRejectMessages, apiErrors}
