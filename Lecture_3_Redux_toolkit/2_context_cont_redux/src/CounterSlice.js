import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 10,
  },
  reducers: {
    //Step 1 : initialize the state function
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export default counterSlice;
