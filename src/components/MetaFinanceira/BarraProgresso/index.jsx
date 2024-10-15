import React from "react";
import { BarraContainer, StyledBarraProgresso } from "../style";
import { useSelector } from "react-redux";
import { calcularProgressoMeta } from "../../../utils/index";

const BarraProgresso = () => {
  const { orcamentoDiario, renda, objetivoFinanceiro } = useSelector(
    (state) => state.usuario
  );

  const progressoMeta = calcularProgressoMeta(
    orcamentoDiario,
    renda,
    objetivoFinanceiro
  );

  return (
    <BarraContainer>
      <StyledBarraProgresso $progresso={progressoMeta}>
        {progressoMeta}%
      </StyledBarraProgresso>
    </BarraContainer>
  );
};

export default BarraProgresso;
