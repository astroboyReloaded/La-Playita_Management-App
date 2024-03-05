// redux store
import { configureStore } from '@reduxjs/toolkit';
import ownersReducer from './slices/ownersSlice';
import managersReducer from './slices/managersSlice';
import serversReducer from './slices/serversSlice';
import cooksReducer from './slices/cooksSlice';
import activeUserReducer from './slices/activeUserSlice';
import ourProductsReducer from './slices/ourProductsSlice';
import cashiersReducer from './slices/cashiersSlice';
import recordsReducer from './slices/recordsSlice';

const store = configureStore({
  reducer: {
    owners: ownersReducer,
    managers: managersReducer,
    servers: serversReducer,
    cooks: cooksReducer,
    activeUser: activeUserReducer,
    ourProducts: ourProductsReducer,
    cashiers: cashiersReducer,
    records: recordsReducer,
  },
});

export default store;
