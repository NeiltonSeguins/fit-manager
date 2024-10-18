import { createSelector } from "@reduxjs/toolkit";

const getTransacoes = (state) => state.transacoes.transacoes;

export const getGastosPorCategoria = createSelector(
  [getTransacoes],
  (movimentacoes) => {
    return movimentacoes
      .filter((transacao) => transacao.tipo === "despesa")
      .reduce((valorAcumulado, transacao) => {
        valorAcumulado[transacao.categoria] =
          (valorAcumulado[transacao.categoria] || 0) +
          parseFloat(transacao.valor);
        return valorAcumulado;
      }, {});
  }
);
