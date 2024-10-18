import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contas: [],
};

const contasSlice = createSlice({
  name: "contas",
  initialState,
  reducers: {
    adicionarConta: (state, action) => {
      state.contas.push(action.payload);
    },
  },
});

export const { adicionarConta } = contasSlice.actions;
export default contasSlice.reducer;
