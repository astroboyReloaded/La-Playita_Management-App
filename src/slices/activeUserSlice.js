import { createSlice } from '@reduxjs/toolkit';

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState: {
    activeUser: null,
    passwordConfirmed: false,
  },
  reducers: {
    setActiveUser: (state, { payload }) => ({
      ...state,
      activeUser: payload,
    }),
    confirmPassword: (state) => ({
      ...state,
      passwordConfirmed: true,
    }),
    resetActiveUser: (state) => ({
      ...state,
      activeUser: null,
      passwordConfirmed: false,
    }),
  },
});

export const { setActiveUser, resetActiveUser, confirmPassword } = activeUserSlice.actions;

export default activeUserSlice.reducer;
