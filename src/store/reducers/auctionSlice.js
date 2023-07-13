import { createSlice } from '@reduxjs/toolkit'

const auctionSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addNumber: (state, action) => state + action.payload,
  },
})

export const { addNumber } = auctionSlice.actions

export default auctionSlice.reducer
