import {apiRoutes, BASE_URL} from '../config/api'
import axios from 'axios'

const getProduct = async (payloads = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${apiRoutes.PRODUCT_ONE}`, {
            params: payloads,
        })

        if (response && response.status) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

const getProductRecommendations = async (payload = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${apiRoutes.PRODUCT_RECOMMENDATIONS}`, {
            params: payload,
        })

        if (response && response.status) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export {getProduct, getProductRecommendations}
