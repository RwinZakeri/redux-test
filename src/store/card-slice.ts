import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type ProductsState = {
  items: Product[];
};

const initialState: ProductsState = {
  items: [],
};

export const card = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action: PayloadAction<Product>) {
      const isExist = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (isExist >= 0) {
        state.items[isExist].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeCard(state, action: PayloadAction<string>) {
      const isExist = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (isExist !== -1) {
        if (state.items[isExist].quantity === 1) {
          state.items.splice(isExist, 1);
        } else {
          state.items[isExist].quantity -= 1;
        }
      }
    },
  },
});

export const { addToCard, removeCard } = card.actions;
export default card.reducer;
