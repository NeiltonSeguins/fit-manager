import { createSelector } from "@reduxjs/toolkit";

const getMovimentacoes = (state) => state.transacoes.movimentacoes;

export const getGastosPorCategoria = createSelector(
  [getMovimentacoes],
  (movimentacoes) => {
    return movimentacoes.reduce((valorAcumulado, transacao) => {
      if (transacao.tipo === "despesa") {
        valorAcumulado[transacao.categoria] =
          (valorAcumulado[transacao.categoria] || 0) +
          parseFloat(transacao.valor);
      }
      return valorAcumulado;
    }, {});
  }
);
