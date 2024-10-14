import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nome: "",
  renda: "",
  objetivoFinanceiro: "",
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
    },
    defineObjetivoFinanceiro: (state, action) => {
      state.objetivoFinanceiro = action.payload;
    },
  },
});

export const {
  setNomeUsuario,
  defineObjetivoFinanceiro,
  atualizarRendaMensal,
} = usuarioSlice.actions;
export default usuarioSlice.reducer;
