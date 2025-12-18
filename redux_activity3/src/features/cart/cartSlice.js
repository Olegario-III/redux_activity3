import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  history: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.history.push([...state.items]);
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.history.push([...state.items]);
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    undo: (state) => {
      if (state.history.length > 0) {
        state.items = state.history.pop();
      }
    }
  }
});

export const { addItem, removeItem, undo } = cartSlice.actions;
export default cartSlice.reducer;
