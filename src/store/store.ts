import { configureStore } from '@reduxjs/toolkit'
import locationReducer from '@/redux/localtionSlice'
import cartReducer from '@/redux/CartSlice'

export default configureStore({
  reducer: {
    location : locationReducer,
    cart : cartReducer
  },
})