import { createSelector } from "@reduxjs/toolkit";

export const getOrcamentoDiario = (state) => state.usuario.orcamentoDiario;
export const getRendaMensal = (state) => state.usuario.renda;
export const getObjetivoFinanceiro = (state) =>
  state.usuario.objetivoFinanceiro;

export const calcularMetaSelector = createSelector(
  [getOrcamentoDiario, getRendaMensal, getObjetivoFinanceiro],
  (orcamentoDiario, rendaMensal, objetivoFinanceiro) => {
    const metas = {
      economizar: rendaMensal * 0.2,
      investir: rendaMensal * 0.15,
      "controlar-gastos": rendaMensal * 0.8,
    };

    const meta = metas[objetivoFinanceiro] || 0;

    if (objetivoFinanceiro === "controlar-gastos") {
      return ((meta - orcamentoDiario) / meta) * 100;
    }

    return meta ? (orcamentoDiario / meta) * 100 : 0;
  }
);
