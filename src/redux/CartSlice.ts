import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  itemCounts: {} as Record<number, number>, // Storing using bookID
};

const cartSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ bookId: number }>) => {
      const { bookId } = action.payload;
      if (!state.itemCounts[bookId]) {
        state.itemCounts[bookId] = 0;
      }
      state.itemCounts[bookId] += 1;
    },
    removeFromCart(state, action: PayloadAction<{ bookId: number }>) {
      const { bookId } = action.payload;
      if (state.itemCounts[bookId]) {
        state.itemCounts[bookId] = 0;
        if (state.itemCounts[bookId] <= 0) {
          delete state.itemCounts[bookId];
        }
      }
    },
    increment: (state, action) => {
      const { bookId } = action.payload;
      if (state.itemCounts[bookId]) {
        state.itemCounts[bookId] = (state.itemCounts[bookId] || 0) + 1;
      }
    },
    decrement: (state, action) => {
      const { bookId } = action.payload;
      if (state.itemCounts[bookId] && state.itemCounts[bookId] > 0) {
        state.itemCounts[bookId] = state.itemCounts[bookId] - 1;
      }
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
