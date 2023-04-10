import { createSlice } from "@reduxjs/toolkit";

const storageKeyPage = "storageKeyPage";

const initialState = {
  page: JSON.parse(localStorage.getItem(storageKeyPage)) ?? 1,
  length: 0
};

const paginationReducer = createSlice({
  name: "pagination",
  initialState: initialState,

  reducers: {
    paginate: (state, action) => {
      state.page = action.payload;
    },

    paginationLength: (state, action) => {
      console.log(state)
      state.length = action.payload;
    }

  },
});
export const { paginate, paginationLength} = paginationReducer.actions;
export default paginationReducer.reducer;
