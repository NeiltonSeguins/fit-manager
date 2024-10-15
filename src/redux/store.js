import { configureStore } from "@reduxjs/toolkit";
import usuarioSlice from "../redux/slices/usuarioSlice";
import transacoesSlice from "../redux/slices/transacoesSlice";

export const store = configureStore({
  reducer: {
    usuario: usuarioSlice,
    transacoes: transacoesSlice,
  },
});

export default store;
