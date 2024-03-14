import { createSlice } from '@reduxjs/toolkit';

const managersSlice = createSlice({
  name: 'managers',
  initialState: {
    managers: JSON.parse(localStorage.getItem('managers')) || [],
    activeMngr: null,
  },
  reducers: {
    addNewManager: (state, { payload }) => {
      state.managers.push(payload);
      localStorage.setItem('managers', JSON.stringify(state.managers));
    },
  },
});

export const { addNewManager } = managersSlice.actions;

export default managersSlice.reducer;
