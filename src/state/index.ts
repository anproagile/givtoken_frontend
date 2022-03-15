import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import globalReducer from './global'
import cryptoPuffiesReducer from './cryptopuffies'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    global: globalReducer,
    cryptopuffies: cryptoPuffiesReducer
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
