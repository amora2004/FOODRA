import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(item => item.title === action.payload.title)
      !product && state.products.push(action.payload)
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(item => item.title !== action.payload.title)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})
export const { addToCart, removeCart, resetCart } = counterSlice.actions

export default counterSlice.reducer