import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transacoes: [],
};

const transacoesSlice = createSlice({
  name: "transacoes",
  initialState,
  reducers: {
    adicionarTransacao: (state, action) => {
      state.transacoes.push(action.payload);
    },
  },
});

export const { adicionarTransacao } = transacoesSlice.actions;
export default transacoesSlice.reducer;
