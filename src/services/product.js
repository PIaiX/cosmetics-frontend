import {apiRoutes} from '../config/api'
import {$authApi} from './index'

const getProduct = async (payloads = {}) => {
    try {
        const response = await $authApi.get(apiRoutes.PRODUCT_ONE, {
            params: payloads,
        })

        if (response && response.status) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

const getProductRecommendations = async (payloads = {}) => {
    try {
        const response = await $authApi.get(apiRoutes.PRODUCT_RECOMMENDATIONS, {
            params: payloads,
        })

        if (response && response.status) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export {getProduct, getProductRecommendations}
