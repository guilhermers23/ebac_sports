import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type CartState = { cart: Produto[] };
const initialState: CartState = { cart: [] };

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;
      if (state.cart.find((p) => p.id === produto.id)) {
        alert('Item já adicionado');
      } else {
        state.cart.push(produto);
      }
    }
  }
});

export const { adicionarAoCarrinho } = cartSlice.actions;
export default cartSlice.reducer;
