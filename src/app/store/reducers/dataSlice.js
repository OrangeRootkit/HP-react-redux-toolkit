
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    dataLength: 0,
    status: null,
    error: null,
};


export const fetchData = createAsyncThunk(
    "fetchData", 
    async function () {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();
    return data
});


const dataSlice= createSlice({
  name: "data",
  initialState: initialState,
//   reducers: {
//     getData:(state,action) => {
//         state.data = action.payload;
//         console.log(state.data)
//     },
//   },
  extraReducers: {
    [fetchData.pending]:(state)=> {
        state.status = 'loading';
        state.error = null;
    },
    [fetchData.fulfilled]:(state, action)=> {
        state.status = 'resolved';
        state.data = action.payload;
        state.dataLength = action.payload.length
    },
    [fetchData.rejected]:(state, action)=> {},
  },


});
export const { getData } = dataSlice.actions;
export default dataSlice.reducer;
