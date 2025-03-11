import { configureStore } from "@reduxjs/toolkit"

import CounterSlice from "./slice/CounterSlice"
import CounterInputSlice from "./slice/CounterInputSlice";
import UserSlice from "./slice/UserSlice";

const store = configureStore({
  reducer: {
    counterSliceSection: CounterSlice.reducer,
    counterInputSliceSection: CounterInputSlice.reducer,
    userSection: UserSlice.reducer
  },
});

export default store;