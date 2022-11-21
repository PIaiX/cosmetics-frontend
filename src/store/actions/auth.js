import {createAsyncThunk} from '@reduxjs/toolkit'
import {$api, $authApi} from '../../services/index'
import {apiRoutes} from '../../config/api'
import {dispatchApiErrorAlert} from '../../helpers/alert'
import {resetCart} from '../reducers/cartSlice'

const login = createAsyncThunk('auth/login', async (payloads, thunkAPI) => {
    try {
        const response = await $authApi.post(apiRoutes.AUTH_LOGIN, payloads)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        dispatchApiErrorAlert(error)
        return thunkAPI.rejectWithValue(error.message)
    }
})

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    thunkAPI.dispatch(resetCart())
    try {
        const response = await $authApi.post(apiRoutes.AUTH_LOGOUT)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const checkAuth = createAsyncThunk('auth/check', async (_, thunkAPI) => {
    try {
        const response = await $authApi.post(apiRoutes.AUTH_CHECK)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const refreshAuth = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const response = await $api.post(apiRoutes.AUTH_REFRESH)

        if (response && response.status === 200) {
            return response.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export {login, logout, checkAuth, refreshAuth}
