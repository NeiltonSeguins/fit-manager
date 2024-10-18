import { combineReducers } from "@reduxjs/toolkit";
import contasSlice from "./slices/contasSlice";
import transacoesSlice from "./slices/transacoesSlice";
import usuarioSlice from "./slices/usuarioSlice";

const rootReducer = combineReducers({
  contas: contasSlice,
  transacoes: transacoesSlice,
  usuario: usuarioSlice,
});

export default rootReducer;
