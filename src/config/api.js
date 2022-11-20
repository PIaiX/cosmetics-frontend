const BASE_URL = process.env.REACT_APP_BASE_URL

const apiRoutes = {
    // category
    CATEGORY_ALL: '/category/all',
    CATEGORY_ONE: '/category/one',
    CATEGORY_RECOMMENDATIONS: '/category/recommendations',
    SEARCH_GET: '/search',
    // product
    PRODUCT_ONE: '/product/one',
    PRODUCT_RECOMMENDATIONS: '/product/recommendations',
}

const apiResponseMessages = {
    // cart
    CART_CREATE: 'Товар был успешно добавлен в корзину',
    CART_EDIT: 'Корзина обновлена',
    CART_DELETE: 'Товар был удален из корзины',
}

const apiRejectMessages = {
    DEFAULT: 'Что-то пошло не так, повторите попытку позже',
    PAGE_ERROR: 'Не удалось загрузить страницу, вернитесь назад или перезагрузите страницу',
}

const apiErrors = {}

export {BASE_URL, apiRoutes, apiResponseMessages, apiRejectMessages, apiErrors}
