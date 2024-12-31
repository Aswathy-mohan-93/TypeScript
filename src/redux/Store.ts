import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import bookReducer from './BookSlice'

const store = configureStore({
    reducer: {
      cart: cartReducer,
      book: bookReducer,
    },
  });
  
export type RootState = ReturnType<typeof store.getState>

export default store;