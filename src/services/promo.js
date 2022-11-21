import axios from 'axios'
import {apiRoutes, BASE_URL} from '../config/api'

const getPromoDiscount = async (payload = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${apiRoutes.PROMO_GET}`, {
            params: payload,
        })

        if (response && response.status) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export {getPromoDiscount}
