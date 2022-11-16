import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isSync: false,
    isLoading: false,
    error: null,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        createProduct: (state, action) => {
            state.items.push({...action?.payload?.product, count: 1})
        },
        updateProduct: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action?.payload?.productId) {
                    return {
                        ...item,
                        count: action?.payload?.count,
                    }
                } else return item
            })
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action?.payload?.productId)
        },
        resetCart: (state) => {
            state.isSync = false
            state.isLoading = false
            state.error = null
            state.items = []
        },
        // setSync: (state) => {
        //     state.isSync = true
        // },
    },
    // extraReducers: {
    //     // ! getCart
    //     [getCart.pending]: (state) => {
    //         state.isLoading = true
    //         state.error = null
    //     },
    //     [getCart.fulfilled]: (state, action) => {
    //         state.items = action?.payload?.products || []
    //         state.isLoading = false
    //     },
    //     [getCart.rejected]: (state, action) => {
    //         console.log('Get cart rejected', action.payload)
    //         state.isLoading = false
    //     },
    //
    //     // ! cartSync
    //     [cartSync.fulfilled]: (state) => {
    //         state.isSync = true
    //     },
    // },
})

export const {createProduct, updateProduct, deleteProduct, resetCart} = cartSlice.actions

export default cartSlice.reducer
