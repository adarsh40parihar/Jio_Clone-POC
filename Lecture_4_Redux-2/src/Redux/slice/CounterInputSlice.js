import { createSlice } from "@reduxjs/toolkit";

const CounterInputSlice = createSlice({
  name: "counterInputSlice",
  initialState: {
    count: 0,
    delta: 1,
  },
  reducers: {
    // Step 1 : initialize the state function
    increment: (state) => {
      state.count += state.delta;
    },
    decrement: (state) => {
      state.count -= state.delta;
    },
    updateDelta: (state, params) => {
      // to acccess just params.payload
      const delta = params.payload;
      state.delta = delta;
    },
    reset: (state) => {
      // to acccess just params.payload
      state.count = 0;
      state.delta = 1;
    }
  },
});

export default CounterInputSlice;
