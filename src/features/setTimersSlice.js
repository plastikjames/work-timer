import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timers: [{ name: "break", time: 5, index: 0 }, { name: "session", time: 25, index: 1 }],
    timer: { started: false, timeLeft: 1500, timerIndex: 1, intervalID: null }
};

export const setTimersSlice = createSlice({
    name: 'timers',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            if (state.timers[action.payload].time < 60) {
                state.timers[action.payload].time += 1;
            }
            if (action.payload === 1) {
                state.timer.timeLeft = state.timers[1].time * 60;
            }
        },
        decrement: (state, action) => {
            if (state.timers[action.payload].time > 1) {
                state.timers[action.payload].time -= 1;
            }
            if (action.payload === 1) {
                state.timer.timeLeft = state.timers[1].time * 60;
            }
        },
        update: (state, action) => {
            if (state.timer.started) {
                state.timer.timeLeft -= 1;
            }
        },
        start_stop: (state, action) => {
            state.timer.started ? state.timer.started = false :  state.timer.started = true;
        },
        stopId: (state, action) => {
            state.timer.intervalID = action.payload;
        },
        resetTime: (state, action) => {
            state.timer.timeLeft = 1500;
            state.timer.timerIndex = 1;
            state.timers[0].time = 5; 
            state.timers[1].time = 25; 
        },
        switchTime: (state, action) => {
            if (state.timer.timerIndex === 1) {
                state.timer.timeLeft = state.timers[0].time * 60;
                state.timer.timerIndex = 0
            } else if (state.timer.timerIndex === 0) {
                state.timer.timeLeft = state.timers[1].time * 60;
                state.timer.timerIndex = 1
            }
        }

    }

});

export const { increment, decrement, update, start_stop, stopId, resetTime, switchTime } = setTimersSlice.actions;
export const selectTimers = (state) => state.timers.timers;
export const selectTimer = (state) => state.timers.timer;
export default setTimersSlice.reducer;