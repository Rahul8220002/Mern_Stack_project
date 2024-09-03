import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const addSlice = createSlice({
  name: "addto",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action) => {
      state.data.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addtocart, removeItem } = addSlice.actions;
export default addSlice.reducer;
