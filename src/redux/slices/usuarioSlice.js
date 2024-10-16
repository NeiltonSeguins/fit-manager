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
    atualizarOrcamento: (state, action) => {
      const { valor, tipo } = action.payload;
      if (tipo === "receita") {
        state.orcamentoDiario += valor;
      } else if (tipo === "despesa") {
        state.orcamentoDiario -= valor;
      }
    },
    atualizarSaldoOrcamento: (state, action) => {
      const saldo = action.payload;
      state.orcamentoDiario += saldo;
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
  atualizarOrcamento,
  atualizarSaldoOrcamento,
} = usuarioSlice.actions;
export default usuarioSlice.reducer;
