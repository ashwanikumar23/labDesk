import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const SelectIdSlice = createSlice({
    name: 'store',
    initialState: 0,
    reducers: {
        SelectID(state, action: PayloadAction<number>) {
            console.log("id", action.payload);
            return action.payload; // Return the new state
        },
        unSelectID(state) {
            
            return 0; // Return the new state
        },
    }
});


export const { SelectID,unSelectID } = SelectIdSlice.actions;
export default SelectIdSlice.reducer;
