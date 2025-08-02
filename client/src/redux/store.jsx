import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import AllJobsSlice from './jobsSlice'
import applicationsSlice from './applicationsSlice'
import companySlice from './companySlice'
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    version:1,
    storage,
}

const rootReducer = combineReducers({
    auth : authSlice,
    jobs: AllJobsSlice,
    applications: applicationsSlice,
    company: companySlice
})
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
    }
   
})

export default store;