import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contas: [],
};

const contasSlice = createSlice({
  name: "contas",
  initialState,
  reducers: {
    adicionarConta: (state, action) => {
      const novaConta = action.payload;
      state.contas.push({ id: uuidv4(), ...novaConta });
    },
  },
});

export const { adicionarConta } = contasSlice.actions;
export default contasSlice.reducer;
