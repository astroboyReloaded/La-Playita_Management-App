import { createSlice } from '@reduxjs/toolkit';

const cashiersSlice = createSlice({
  name: 'cashiers',
  initialState: {
    cashiers: JSON.parse(localStorage.getItem('cashiers')) || [],
    activeCashier: null,
  },
  reducers: {
    addCashier: (state, { payload }) => {
      state.cashiers.push(payload);
      localStorage.setItem('cashiers', JSON.stringify(state.cashiers));
    },
    setActiveCashier: (state, { payload }) => ({
      ...state,
      activeCashier: payload,
    }),
    removeCashier: (state, { payload }) => {
      state.cashiers = state.cashiers.filter((cashier) => cashier.id !== payload);
      localStorage.setItem('cashiers', JSON.stringify(state.cashiers));
    },
    addSaleToChashier: (state, { payload }) => {
      state.cashiers.forEach((cashier) => cashier.id === payload.id
      && cashier.sales.push(payload.sale));
      localStorage.setItem('cashiers', JSON.stringify(state.cashiers));
    },
    removeSaleFromCashier: (state, { payload }) => {
      state.cashiers.forEach((cashier) => cashier.id === payload.id
      && cashier.sales.filter((sale) => sale.id !== payload.saleId));
      localStorage.setItem('cashiers', JSON.stringify(state.cashiers));
    },
  },
});

export const {
  addCashier,
  setActiveCashier,
  removeCashier,
  addSaleToCashier,
  removeSaleFromCashier,
} = cashiersSlice.actions;

export default cashiersSlice.reducer;
