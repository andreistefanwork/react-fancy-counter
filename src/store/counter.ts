import {createSlice} from '@reduxjs/toolkit';

const initialCountState = {count: 0};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
    reducers: {
        countForward: (state) => {
            state.count++;
        },
        countBackward: (state) => {
            state.count--;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
