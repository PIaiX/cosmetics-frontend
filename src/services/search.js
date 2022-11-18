import axios from 'axios'
import {apiRoutes, BASE_URL} from '../config/api'

const getSearch = async (text) => {
    try {
        const response = await axios.get(`${BASE_URL}${apiRoutes.SEARCH_GET}`, {params: {text}})

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export {getSearch}
