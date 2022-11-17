import {createAsyncThunk} from '@reduxjs/toolkit'
import {apiResponseMessages} from '../../config/api'
import {dispatchAlert} from '../../helpers/alert'
import {createProduct, deleteProduct, updateProduct} from '../reducers/cartSlice'

// const getCart = createAsyncThunk('cart/all', async (payloads, thunkAPI) => {
//     const isAuth = thunkAPI.getState()?.auth?.isAuth
//
//     if (isAuth) {
//         try {
//             const response = await $authApi.get(apiRoutes.CART_ALL, {params: payloads})
//
//             if (response && response.status === 200) {
//                 return response.data
//             }
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// })

const cartCreate = createAsyncThunk('cart/create', async (payloads, thunkAPI) => {
    // const auth = thunkAPI.getState()?.auth

    // if (auth?.isAuth) {
    //     try {
    //         const response = await $authApi.post(apiRoutes.CART_CREATE, {
    //             userId: auth?.user?.id,
    //             productId: payloads?.product?.id,
    //         })
    //
    //         if (response && response.status === 200) {
    //             dispatchAlert('success', apiResponseMessages.CART_CREATE)
    //             thunkAPI.dispatch(createProduct({product: payloads?.product}))
    //             return response.data
    //         }
    //     } catch (error) {
    //         dispatchApiErrorAlert(error)
    //         return thunkAPI.rejectWithValue(error.message)
    //     }
    // } else {
    dispatchAlert('success', apiResponseMessages.CART_CREATE)
    thunkAPI.dispatch(createProduct({product: payloads?.product}))
    // }
})

const cartEdit = createAsyncThunk('cart/edit', async (payloads, thunkAPI) => {
    const cart = thunkAPI.getState()?.cart?.items
    const cartItem = cart?.length && cart.find((item) => +item?.id === +payloads?.productId)
    const prevCount = cartItem?.count

    // const auth = thunkAPI.getState()?.auth
    //
    // if (auth?.isAuth) {
    //     try {
    //         const response = await $authApi.post(apiRoutes.CART_EDIT, {
    //             userId: auth?.user?.id,
    //             count: payloads?.count ?? 0,
    //             ...payloads,
    //         })
    //
    //         if (response && response.status === 200) {
    //             if (payloads?.count) {
    //                 thunkAPI.dispatch(updateProduct(payloads))
    //                 dispatchAlert('success', apiResponseMessages.CART_EDIT)
    //             } else {
    //                 thunkAPI.dispatch(deleteProduct(payloads))
    //                 dispatchAlert('success', apiResponseMessages.CART_DELETE)
    //             }
    //
    //             return response.data
    //         }
    //     } catch (error) {
    //         return thunkAPI.rejectWithValue(error.message)
    //     }
    // } else {
    if (payloads?.count) {
        if (prevCount !== payloads?.count) {
            thunkAPI.dispatch(updateProduct(payloads))
            dispatchAlert('success', apiResponseMessages.CART_EDIT)
        }
    } else {
        thunkAPI.dispatch(deleteProduct(payloads))
        dispatchAlert('success', apiResponseMessages.CART_DELETE)
    }
    // }
})

const cartDelete = createAsyncThunk('cart/delete', async (payloads, thunkAPI) => {
    thunkAPI.dispatch(cartEdit(payloads))
})

// const cartSync = createAsyncThunk('cart/sync', async (payloads, thunkAPI) => {
//     try {
//         const response = await $authApi.post(apiRoutes.CART_SYNC, payloads)
//
//         if (response && response.status === 200) {
//             thunkAPI.dispatch(getCart())
//             thunkAPI.dispatch(setSync())
//             dispatchAlert('success', apiResponseMessages.CART_EDIT)
//             return response.data
//         }
//     } catch (error) {
//         dispatchApiErrorAlert(error)
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })

export {cartCreate, cartEdit, cartDelete}
