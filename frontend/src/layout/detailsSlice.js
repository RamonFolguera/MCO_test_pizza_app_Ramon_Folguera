import { createSlice } from "@reduxjs/toolkit";  

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        choosenPizza : {}
    },
    reducers: {
        addChoosenPizza: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }
})

export const { addChoosenPizza } = detailsSlice.actions;

export const detailsData = (state) => state.details;

export default detailsSlice.reducer;