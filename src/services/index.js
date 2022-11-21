import axios from 'axios'
import {BASE_URL} from '../config/api'
import store from '../store'
import {refreshAuth} from '../store/actions/auth'

const apiBody = {
    baseURL: BASE_URL,
    withCredentials: true,
}

const $api = axios.create(apiBody)
const $authApi = axios.create(apiBody)

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$authApi.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
            originalRequest._isRetry = true
            store.dispatch(refreshAuth())
        }
        return Promise.reject(error)
    }
)

export {$api, $authApi}
