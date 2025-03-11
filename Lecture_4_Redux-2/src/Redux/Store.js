import { configureStore } from "@reduxjs/toolkit"

import CounterSlice from "./slice/CounterSlice"
import CounterInputSlice from "./slice/CounterInputSlice";

const store = configureStore({
  reducer: {
    counterSliceSection: CounterSlice.reducer,
    counterInputSliceSection: CounterInputSlice.reducer,
  },
});

export default store;