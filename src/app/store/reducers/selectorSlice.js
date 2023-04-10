import {createSlice} from '@reduxjs/toolkit';

const storageKeyCardsPage = "storageKeyCardsPage";
const storageKeySchool = 'storageKeySchool'

const initialState = {
    value: JSON.parse(localStorage.getItem(storageKeyCardsPage)) ?? 8,
    school : JSON.parse(localStorage.getItem(storageKeySchool)) ?? "Choose one"
}

const selectorSlice = createSlice({
    
    name: "selector",
    initialState: initialState,

    reducers: {
        changeSelector : (state , action) =>{
            state.value = action.payload
        },

        changeSchool : (state, action) => {
            state.school = action.payload
        },


    }
});
export const {changeSelector, changeSchool} = selectorSlice.actions
export default selectorSlice.reducer