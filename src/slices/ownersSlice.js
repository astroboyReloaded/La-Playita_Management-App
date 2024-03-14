// Ouners Slice:

import { createSlice } from '@reduxjs/toolkit';

const ownersSlice = createSlice({
  name: 'owners',
  initialState: {
    owners: JSON.parse(localStorage.getItem('owners')) || [],
  },
  reducers: {
    setActiveOwner: (state, action) => {
      state.activeOwner = action.payload;
    },
    resetActiveOwner: (state) => {
      state.activeOwner = {};
    },
    createOwner: (state, action) => {
      state.owners.push(action.payload);
      localStorage.setItem('owners', JSON.stringify(state.owners));
    },
  },
});

export const { setActiveOwner, resetActiveOwner, createOwner } = ownersSlice.actions;

export default ownersSlice.reducer;
