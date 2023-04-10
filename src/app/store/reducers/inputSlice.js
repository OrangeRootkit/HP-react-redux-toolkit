import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

const inputSlice = createSlice({
  name: "inputValue",
  initialState,

  reducers: {
    changeInput: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});
export const { changeInput } = inputSlice.actions;
export default inputSlice.reducer;
