import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const NewIdSlice = createSlice({
    name: 'store',
    initialState: 0,
    reducers: {
        addNewID(state, action: PayloadAction<number>) {
            console.log("id", action.payload);
            return action.payload; // Return the new state
        },
        removeId(state) {
            
            return 0; // Return the new state
        },
    }
});

export const { addNewID,removeId } = NewIdSlice.actions;
export default NewIdSlice.reducer;