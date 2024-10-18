import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  transacoes: [],
};

const transacoesSlice = createSlice({
  name: "transacoes",
  initialState,
  reducers: {
    adicionarTransacao: (state, action) => {
      const novaTransacao = action.payload;
      state.transacoes.push({ id: uuidv4(), ...novaTransacao });
    },
  },
});

export const { adicionarTransacao } = transacoesSlice.actions;
export default transacoesSlice.reducer;
