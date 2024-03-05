import { createSlice } from '@reduxjs/toolkit';

const recordsSlice = createSlice({
  name: 'records',
  initialState: {
    currentSalesByServerToday: [],
    currentExpensesToday: [],
    totalSalesByServerAndDate: [],
    totalExpensesByDate: [],
  },
  reducers: {
    addToCurrentSalesByServerToday: (state, { payload }) => ({
      ...state,
      currentSalesByServerToday: [...state.currentSalesByServerToday, payload],
    }),
    addToCurrentExpensesToday: (state, { payload }) => ({
      ...state,
      currentExpensesToday: [...state.currentExpensesToday, payload],
    }),
    addTotalSalesByServerAndDate: (state, { payload }) => ({
      ...state,
      totalSalesByServerAndDate: [...state.totalSalesByServerAndDate, payload],
    }),
    addTotalExpensesByDate: (state, { payload }) => ({
      ...state,
      totalExpensesByDate: [...state.expenses, payload],
    }),
    clearCurrentSalesByServerToday: (state) => ({
      ...state,
      currentSalesByServerToday: [],
    }),
    clearCurrenteExpensesToday: (state) => ({
      ...state,
      currentExpensesToday: [],
    }),
  },
});

export const {
  addToCurrentSalesByServerToday,
  addToCurrentExpensesToday,
  addTotalSalesByServerAndDate,
  addTotalExpensesByDate,
  clearCurrentSalesByServerToday,
  clearCurrenteExpensesToday,
} = recordsSlice.actions;

export default recordsSlice.reducer;
