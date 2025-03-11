import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    onPending: (state) => {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    onRejected: (state, params) => {
      state.user = null;
      state.loading = false;
      state.error = params.payload;
    },
    onFulfilled: (state, params) => {
      state.user = params.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

// Action creators
const userActions = UserSlice.actions;
export { userActions };
export default UserSlice;
