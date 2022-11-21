import axios from 'axios'
import {apiRoutes, BASE_URL} from '../config/api'

const createOrder = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}${apiRoutes.ORDER_CREATE}`, data)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export {createOrder}
