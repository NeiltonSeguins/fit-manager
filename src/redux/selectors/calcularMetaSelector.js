import { createSelector } from "@reduxjs/toolkit";

export const getOrcamentoDiario = (state) => state.usuario.orcamentoDiario;
export const getRendaMensal = (state) => state.usuario.renda;
export const getObjetivoFinanceiro = (state) =>
  state.usuario.objetivoFinanceiro;

export const calcularMetaSelector = createSelector(
  [getOrcamentoDiario, getRendaMensal, getObjetivoFinanceiro],
  (orcamentoDiario, rendaMensal, objetivoFinanceiro) => {
    let meta = 0;
    switch (objetivoFinanceiro) {
      case "economizar":
        meta = rendaMensal * 0.2;
        return ((orcamentoDiario / meta) * 100).toFixed(0);
      case "investir":
        meta = rendaMensal * 0.15;
        return ((orcamentoDiario / meta) * 100).toFixed(0);
      case "controlar-gastos":
        meta = rendaMensal * 0.8;
        return (((meta - orcamentoDiario) / meta) * 100).toFixed(0);
      default:
        return 0;
    }
  }
);
