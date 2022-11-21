import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '../store/reducers/authSlice'
import alertReducer from '../store/reducers/alertSlice'
import cartReducer from '../store/reducers/cartSlice'
import localeReducer from '../store/reducers/localeSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    cart: cartReducer,
    locale: localeReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'locale'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
const persistor = persistStore(store)

export {persistor}
export default store
