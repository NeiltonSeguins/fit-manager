import { configureStore } from "@reduxjs/toolkit";
import usuarioSlice from "../redux/slices/usuarioSlice";

export const store = configureStore({
  reducer: {
    usuario: usuarioSlice,
  },
});

export default store;
