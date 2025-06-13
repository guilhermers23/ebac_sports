import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/redecers/cart';
import api from '../services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootReducer = ReturnType<typeof store.getState>;
