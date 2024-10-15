import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movimentacoes: [],
  contas: [],
};

const transacoesSlice = createSlice({
  name: "transacoes",
  initialState,
  reducers: {
    adicionarMovimentacao: (state, action) => {
      state.movimentacoes.push(action.payload);
    },
    adicionarConta: (state, action) => {
      state.contas.push(action.payload);
    },
  },
});

export const { adicionarMovimentacao, adicionarConta } =
  transacoesSlice.actions;
export default transacoesSlice.reducer;
