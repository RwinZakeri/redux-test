import { configureStore } from "@reduxjs/toolkit";
import { card } from "./card-slice";

export const store = configureStore({
  reducer: {
    card: card.reducer,
  },
});
