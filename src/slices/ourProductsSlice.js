import { createSlice } from '@reduxjs/toolkit';

const ourProductsSlice = createSlice({
  name: 'inventory',
  initialState: {
    ourProducts: JSON.parse(localStorage.getItem('ourProducts')) || [],
  },
  reducers: {
    createNewProduct: (state, { payload }) => {
      if (payload.category === 'extras' && payload.alternatives.length > 0) {
        state.ourProducts.forEach((product) => {
          for (let i = 0; i < payload.alternatives.length; i += 1) {
            if (product.id === payload.alternatives[i]) {
              product.alternatives.push(payload.id);
            }
          }
        });
      }
      state.ourProducts.push(payload);
      localStorage.setItem('ourProducts', JSON.stringify(state.ourProducts.sort((a, b) => a.name.localeCompare(b.name))));
    },
    editProduct: (state, { payload }) => {
      const [product] = state.ourProducts.filter((product) => product.id === payload.id);
      const {
        name,
        price,
        stock,
        updatedBy,
        updatedOn,
      } = payload;
      product.name = name;
      product.price = price;
      product.stock = stock;
      product.updates.push({
        updatedBy,
        updatedOn,
        price,
        stock,
      });
      localStorage.setItem('ourProducts', JSON.stringify(state.ourProducts));
    },
    deleteProduct: (state, { payload }) => {
      state.ourProducts = state.ourProducts.filter((product) => product.id !== payload);
      localStorage.setItem('ourProducts', JSON.stringify(state.ourProducts));
    },
    addProductQuantity: (state, { payload }) => {
      const product = state.ourProducts.find((product) => product.id === payload.id);
      product.stock += payload.quantity;
      product.updates.push({
        updatedBy: payload.updatedBy,
        updatedOn: payload.lastUpdate,
        stockUpdate: payload.quantity,
      });
      localStorage.setItem('ourProducts', JSON.stringify(state.ourProducts));
    },
  },
});

export const {
  createNewProduct,
  editProduct,
  deleteProduct,
  addProductQuantity,
} = ourProductsSlice.actions;

export default ourProductsSlice.reducer;
