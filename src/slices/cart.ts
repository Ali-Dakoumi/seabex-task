import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface ICartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrUpdateItem: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const index = state.items.findIndex(
        (item) => item.product.id === newItem.product.id
      );

      if (index !== -1) {
        state.items[index].quantity += 1;
      } else {
        state.items.push(newItem);
      }
    },

    increaseItemQuantity: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const { id, amount } = action.payload;
      const index = state.items.findIndex((item) => item.product.id === +id);

      if (index !== -1) {
        state.items[index].quantity += amount;
      }
    },

    decreaseItemQuantity: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const { id, amount } = action.payload;
      const index = state.items.findIndex((item) => item.product.id === +id);

      if (index !== -1) {
        state.items[index].quantity -= amount;
        if (state.items[index].quantity <= 0) {
          state.items.splice(index, 1);
        }
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.product.id !== +id);
    },
  },
});

export const {
  addOrUpdateItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
