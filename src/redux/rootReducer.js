import { combineReducers } from "@reduxjs/toolkit";
import contasSlice from "./slices/contasSlice";
import transacoesSlice from "./slices/transacoesSlice";
import usuarioSlice from "./slices/usuarioSlice";
import objetivosTiposSlice from "./slices/objetivosTiposSlice";

const rootReducer = combineReducers({
  contas: contasSlice,
  transacoes: transacoesSlice,
  usuario: usuarioSlice,
  objetivos: objetivosTiposSlice,
});

export default rootReducer;
