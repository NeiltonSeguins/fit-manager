import { createSlice } from "@reduxjs/toolkit";

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
    defineUsuario: (state, action) => {
      const { nome, renda, objetivoFinanceiro } = action.payload;
      state.nome = nome;
      state.renda = renda;
      state.objetivoFinanceiro = objetivoFinanceiro;
    },
    atualizarRendaMensal: (state, action) => {
      const renda = action.payload;
      state.renda = parseFloat(renda);
      state.orcamentoDiario = Math.floor(renda / 30);
    },
    atualizarOrcamento: (state, action) => {
      let valor = Math.abs(action.payload.valor);

      if (action.payload.tipo != "receita") {
        valor = -valor;
      }

      state.orcamentoDiario += parseFloat(valor);
    },
    atualizarSaldoOrcamento: (state, action) => {
      const saldo = action.payload;
      state.orcamentoDiario += saldo;
    },
    atualizarProgressoMeta: (state, action) => {
      state.progressoMeta = action.payload;
    },
  },
});

export const {
  defineUsuario,
  atualizarRendaMensal,
  atualizarDespesa,
  atualizarReceita,
  atualizarProgressoMeta,
  atualizarOrcamento,
  atualizarSaldoOrcamento,
} = usuarioSlice.actions;
export default usuarioSlice.reducer;
