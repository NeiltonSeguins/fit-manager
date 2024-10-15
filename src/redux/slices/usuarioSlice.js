import { createSlice } from "@reduxjs/toolkit";
import { calcularOrcamentoDiario } from "../../utils/index";

const initialState = {
  nome: "",
  renda: 0,
  objetivoFinanceiro: "",
  progressoMeta: 0,
  orcamentoDiario: 0,
};

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    setNomeUsuario: (state, action) => {
      state.nome = action.payload;
    },
    atualizarRendaMensal: (state, action) => {
      state.renda = action.payload;
      state.orcamentoDiario = calcularOrcamentoDiario(action.payload);
    },
    defineObjetivoFinanceiro: (state, action) => {
      state.objetivoFinanceiro = action.payload;
    },
    atualizarProgressoMeta: (state, action) => {
      state.progressoMeta = action.payload;
    },
  },
});

export const {
  setNomeUsuario,
  defineObjetivoFinanceiro,
  atualizarRendaMensal,
  atualizarProgressoMeta,
} = usuarioSlice.actions;
export default usuarioSlice.reducer;
