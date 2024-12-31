import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedBookData {
    selectedBook: any;
}

const initialState: SelectedBookData = {
    selectedBook: null,
};

const selectedBookSlice = createSlice({
    name: "selectedBook",
    initialState,
    reducers: {
        selectBook: (state, action: PayloadAction<any>) => {
            state.selectedBook = action.payload
        },
    },
})

export const { selectBook } = selectedBookSlice.actions
export default selectedBookSlice.reducer