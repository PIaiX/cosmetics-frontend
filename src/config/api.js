const BASE_URL = process.env.REACT_APP_BASE_URL

const apiRoutes = {
    // auth
    AUTH_REGISTRATION: '/auth/registration',
    AUTH_ACTIVATE: '/auth/activate',
    AUTH_LOGIN: '/auth/login',
    AUTH_CHECK: '/auth/check',
    AUTH_REFRESH: '/auth/refresh',
    AUTH_LOGOUT: '/auth/logout',
    AUTH_RECOVERY: '/auth/recovery',

    // category
    CATEGORY_ALL: '/category/all',
    CATEGORY_ONE: '/category/one',
    CATEGORY_RECOMMENDATIONS: '/category/recommendations',
    SEARCH_GET: '/search',

    // product
    PRODUCT_ONE: '/product/one',
    PRODUCT_RECOMMENDATIONS: '/product/recommendations',

    // promo
    PROMO_GET: '/promo',

    // Admin
    ADMIN_EPR_CATEGORIES_GET: '/admin/getEprCategories',
    ADMIN_EPR_PRODUCTS_GET: '/admin/getEprProducts',
    ADMIN_EPR_ORDER_CREATE: '/admin/createEprOrder',

    ADMIN_CATEGORIES_GET: '/admin/getCategories',
    ADMIN_CATEGORY_GET: '/admin/getCategory',
    ADMIN_CATEGORY_CREATE: '/admin/createCategory',
    ADMIN_CATEGORY_EDIT: '/admin/editCategory',
    ADMIN_CATEGORY_DELETE: '/admin/deleteCategory',

    ADMIN_PRODUCTS_GET: '/admin/getProducts',
    ADMIN_PRODUCT_GET: '/admin/getProduct',
    ADMIN_PRODUCT_CREATE: '/admin/createProduct',
    ADMIN_PRODUCT_EDIT: '/admin/editProduct',
    ADMIN_PRODUCT_DELETE: '/admin/deleteProduct',

    ADMIN_SALES_GET: '/admin/getSales',
    ADMIN_SALE_GET: '/admin/getSale',
    ADMIN_SALE_CREATE: '/admin/createSale',
    ADMIN_SALE_EDIT: '/admin/editSale',
    ADMIN_SALE_DELETE: '/admin/deleteSale',

    ADMIN_ORDERS_GET: '/admin/getOrders',
    ADMIN_ORDER_GET: '/admin/getOrder',
    ADMIN_ORDER_EDIT: '/admin/editOrder',
    ADMIN_ORDER_DELETE: '/admin/deleteOrder',

    ADMIN_USERS_GET: '/admin/getUsers',
    ADMIN_USER_GET: '/admin/getUser',
    ADMIN_USER_CREATE: '/admin/createUser',
    ADMIN_USER_EDIT: '/admin/editUser',
    ADMIN_USER_DELETE: '/admin/deleteUser',

    ADMIN_NOTIFICATIONS_GET: '/admin/getNotifications',
    ADMIN_NOTIFICATION_CREATE: '/admin/createNotification',
    ADMIN_NOTIFICATION_EDIT: '/admin/editNotification',
    ADMIN_NOTIFICATION_DELETE: '/admin/deleteNotification',

    ADMIN_MARKS_GET: '/admin/getMarks',
    ADMIN_MARK_GET: '/admin/getMark',
    ADMIN_MARK_CREATE: '/admin/createMark',
    ADMIN_MARK_EDIT: '/admin/editMark',
    ADMIN_MARK_DELETE: '/admin/deleteMark',

    ADMIN_COMPLAINTS_GET: '/admin/getComplaints',
    ADMIN_COMPLAIN_GET: '/admin/getComplain',
    ADMIN_COMPLAIN_DELETE: '/admin/deleteComplain',
    ADMIN_COMPLAIN_EDIT: '/admin/editComplain',

    ADMIN_STATISTIC_GET: '/admin/statistic',

    ADMIN_SITE_UPDATE: '/admin/updateSite',
    ADMIN_SITE_GET: '/admin/getSite'
}

const apiResponseMessages = {
    // auth
    REGISTRATION: 'Вы успешно зарегистрировались и активировали свой аккаунт',
    RECOVERY: 'Ваш пароль был успешно обновлен',

    // cart
    CART_CREATE: 'Товар был успешно добавлен в корзину',
    CART_EDIT: 'Корзина обновлена',
    CART_DELETE: 'Товар был удален из корзины',

    // Checkout
    ORDER_CREATE: '/order/create',

    // promo
    PROMO_APPLY: 'Промокод активирован',

    // Admin
    ADMIN_CATEGORY_CREATE: 'Категория успешно создана',
    ADMIN_CATEGORY_EDIT: 'Категория успешно изменена',
    ADMIN_CATEGORY_DELETE: 'Категория успешно удалена',

    ADMIN_PRODUCT_CREATE: 'Товар успешно создана',
    ADMIN_PRODUCT_EDIT: 'Товар успешно изменен',
    ADMIN_PRODUCT_DELETE: 'Товар успешно удалена',

    ADMIN_ORDER_EDIT: 'Заказ успешно изменен',
    ADMIN_ORDER_DELETE: 'Заказ успешно удален',

    ADMIN_SALE_CREATE: 'Акция успешно создана',
    ADMIN_SALE_EDIT: 'Акция успешно изменена',
    ADMIN_SALE_DELETE: 'Акция успешно удалена',

    ADMIN_MARK_CREATE: 'Метка успешно создана',
    ADMIN_MARK_EDIT: 'Метка успешно изменена',
    ADMIN_MARK_DELETE: 'Метка успешно удалена',

    ADMIN_USER_EDIT: 'Клиент успешно изменен',
    ADMIN_USER_DELETE: 'Клиент успешно удален',

    ADMIN_NOTIFICATION_CREATE: 'Уведомление успешно отправлено',
    ADMIN_NOTIFICATION_DELETE: 'Уведомление успешно удалено',

    ADMIN_SITE_UPDATE: 'Данные успешно сохранены'
}

const apiRejectMessages = {
    DEFAULT: 'Что-то пошло не так, повторите попытку позже',
    PAGE_ERROR: 'Не удалось загрузить страницу, вернитесь назад или перезагрузите страницу',
    PROMO_NOT_FOUND: 'Промокод не найден',
}

const apiErrors = {
    PROMO_NOT_FOUND: 'PROMO_NOT_FOUND',
}

export { BASE_URL, apiRoutes, apiResponseMessages, apiRejectMessages, apiErrors }
