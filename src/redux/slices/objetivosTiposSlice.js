import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objetivo: {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  },
};

const objetivoTiposSlice = createSlice({
  name: "objetivos",
  initialState,
});

export default objetivoTiposSlice.reducer;
