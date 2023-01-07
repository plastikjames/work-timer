import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timers: [{ name: "break", time: 5, index: 0 }, { name: "session", time: 25, index: 1 }]
};

export const setTimersSlice = createSlice({
    name: 'timers',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {

            state.timers[action.payload.index].time += 1;
        },
        decrement: (state, action) => {
            if (state.timers[action.payload.index].time > 0) {
                state.timers[action.payload.index].time -= 1;
            }
        }
    }

});

export const { increment, decrement } = setTimersSlice.actions;
export const selectTimers = (state) => state.timers.timers;
export default setTimersSlice.reducer;