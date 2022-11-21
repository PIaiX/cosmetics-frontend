import { apiRoutes } from '../config/api'
import { $authApi } from './index'

const getPlaix = async () => {
    const data = await $host.get('https://api.plaix.ru/?getLink')
    if (data) {
        return data
    } else {
        return false
    }
}

const getEprCategories = async () => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_EPR_CATEGORIES_GET)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getEprProducts = async () => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_EPR_PRODUCTS_GET)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const createEprOrder = async (order) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_EPR_ORDER_CREATE, order)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}
const getCategories = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_CATEGORIES_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getCategory = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_CATEGORY_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editCategory = async (category) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_CATEGORY_EDIT, category)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteCategory = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_CATEGORY_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const createCategory = async (category) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_CATEGORY_CREATE, category)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}

const getProducts = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_PRODUCTS_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getProduct = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_PRODUCT_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editProduct = async (product) => {
    try {
        const formData = new FormData()
        for (var key in product) {
            if (key == 'images') {
                formData.append(key, product[key][0])
            } else {
                formData.append(key, product[key])
            }
        }
        const response = await $authApi.post(apiRoutes.ADMIN_PRODUCT_EDIT, formData)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteProduct = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_PRODUCT_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const createProduct = async (product) => {
    try {
        const formData = new FormData()
        for (var key in product) {
            if (key == 'images') {
                formData.append(key, product[key][0])
            } else {
                formData.append(key, product[key])
            }
        }

        const response = await $authApi.post(apiRoutes.ADMIN_PRODUCT_CREATE, formData)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}

const getOrders = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_ORDERS_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getOrder = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_ORDER_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editOrder = async (order) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_ORDER_EDIT, order)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteOrder = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_ORDER_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}

const getSales = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_SALES_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getSale = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_SALE_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editSale = async (sale) => {
    try {
        const formData = new FormData()
        for (var key in sale) {
            if (key == 'images') {
                formData.append(key, sale[key][0])
            } else {
                formData.append(key, sale[key])
            }
        }

        const response = await $authApi.post(apiRoutes.ADMIN_SALE_EDIT, formData)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteSale = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_SALE_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const createSale = async (sale) => {
    try {
        const formData = new FormData()
        for (var key in sale) {
            if (key == 'images') {
                formData.append(key, sale[key][0])
            } else {
                formData.append(key, sale[key])
            }
        }

        const response = await $authApi.post(apiRoutes.ADMIN_SALE_CREATE, formData)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getNotifications = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_NOTIFICATIONS_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const createNotification = async (notification) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_NOTIFICATION_CREATE, notification)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteNotification = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_NOTIFICATION_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}

const getUsers = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_USERS_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getUser = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_USER_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editUser = async (user) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_USER_EDIT, user)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteUser = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_USER_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}

const createMark = async (mark) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_MARK_CREATE, mark)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getMarks = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_MARKS_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getMark = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_MARK_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editMark = async (mark) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_MARK_EDIT, mark)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteMark = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_MARK_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}

const getComplaints = async (page = 1, limit = 10) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_COMPLAINTS_GET, {
            params: {
                page,
                limit,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getComplain = async (id) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_COMPLAIN_GET, {
            params: {
                id,
            },
        })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const editComplain = async (complain) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_COMPLAIN_EDIT, complain)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const deleteComplain = async (id) => {
    try {
        const response = await $authApi.delete(apiRoutes.ADMIN_COMPLAIN_DELETE, { data: { id } })

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getStatistic = async () => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_STATISTIC_GET)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const updateSite = async (data) => {
    try {
        const response = await $authApi.post(apiRoutes.ADMIN_SITE_UPDATE, data)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
const getSite = async (data) => {
    try {
        const response = await $authApi.get(apiRoutes.ADMIN_SITE_GET, data)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return error
    }
}
export {
    // getEprCategories,
    // getEprProducts,
    // createEprOrder,
    getCategories,
    getCategory,
    editCategory,
    createCategory,
    deleteCategory,
    getProducts,
    getProduct,
    editProduct,
    createProduct,
    deleteProduct,
    getOrders,
    getOrder,
    editOrder,
    deleteOrder,
    // getSales,
    // getSale,
    // editSale,
    // createSale,
    // deleteSale,
    // getUsers,
    // getUser,
    // editUser,
    // deleteUser,
    getStatistic,
    // createNotification,
    // deleteNotification,
    // getNotifications,
    // createMark,
    // getMarks,
    // getMark,
    // editMark,
    // deleteMark,

    // getComplaints,
    // getComplain,
    // editComplain,
    // deleteComplain,

    // updateSite,
    // getSite
}
