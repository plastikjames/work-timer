import { configureStore } from '@reduxjs/toolkit';
import timersReducer from '../features/setTimersSlice';

export const store = configureStore({
  reducer: {
    timers: timersReducer,
  },
});
