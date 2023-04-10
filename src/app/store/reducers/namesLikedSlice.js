import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  counterLike: [],
};

const namesLikedSlice = createSlice({
  name: "namesLiked",
  initialState,

  reducers: {
    changeLike: (state, action) => {
        console.log(state)
      state.namesLiked = action.payload;
    },
  },
});

export const { changeLike } = namesLikedSlice.actions;
export default namesLikedSlice.reducer;
