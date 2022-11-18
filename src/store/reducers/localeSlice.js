import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.value = action?.payload?.value
        },
        resetLocale: (state) => {
            state.value = initialState.value
        },
    },
})

// Action creators are generated for each case reducer function
export const {setLocale, resetLocale} = localeSlice.actions

export default localeSlice.reducer
