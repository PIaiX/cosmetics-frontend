import {apiRoutes, BASE_URL} from '../config/api'
import axios from 'axios'

const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${apiRoutes.CATEGORY_ALL}`)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

const getCategory = async (id = '') => {
    try {
        const response = await axios.get(`${BASE_URL}${apiRoutes.CATEGORY_ONE}/${id}`)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export {getCategory, getCategories}
