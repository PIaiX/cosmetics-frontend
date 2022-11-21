import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null,
    currency: '$',
}

const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.value = action?.payload?.value
        },
        setCurrency: (state, action) => {
            state.currency = action?.payload?.currency
        },
        resetLocale: (state) => {
            state.value = initialState.value
        },
    },
})

// Action creators are generated for each case reducer function
export const {setLocale, resetLocale, setCurrency} = localeSlice.actions

export default localeSlice.reducer
