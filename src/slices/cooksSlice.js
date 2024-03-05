import { createSlice } from '@reduxjs/toolkit';

const cooksSlice = createSlice({
  name: 'cooks',
  initialState: {
    cooks: JSON.parse(localStorage.getItem('cooks')) || [],
  },
  reducers: {
    addNewCook: (state, { payload }) => {
      const newCook = {
        id: payload.id,
        name: payload.name,
        password: payload.password,
        roll: payload.roll,
        isLogged: false,
        logs: [],
      };
      state.cooks.push(newCook);
      localStorage.setItem('cooks', JSON.stringify(state.cooks));
    },
  },
});

export const { addNewCook } = cooksSlice.actions;

export default cooksSlice.reducer;
