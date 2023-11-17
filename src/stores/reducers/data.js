import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("data")) || [],
};



export const dataSlice = createSlice({
  name: "baseData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
