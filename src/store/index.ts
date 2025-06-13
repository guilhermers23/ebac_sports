import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/redecers/cart';

export const store = configureStore({
  reducer: {
    carrinho: cartReducer
  }
});

export type RootReducer = ReturnType<typeof store.getState>;
