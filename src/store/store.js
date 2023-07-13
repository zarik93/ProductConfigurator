import { configureStore } from '@reduxjs/toolkit'
import auctionReducer from './reducers/auctionSlice'

const store = configureStore({
  reducer: {
    auctionPrice: auctionReducer,
  },
})

export default store
