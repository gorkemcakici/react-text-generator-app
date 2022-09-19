import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
};
const counterSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
  },
});
export const { setText } = counterSlice.actions;

export const store = configureStore({
  reducer:  counterSlice.reducer ,
});
