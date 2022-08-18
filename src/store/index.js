import {persistReducer} from 'redux-persist'
import { rootReducer } from './rootReducer'
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['cases']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)
export default store
