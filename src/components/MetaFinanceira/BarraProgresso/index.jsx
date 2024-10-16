import React from "react";
import { BarraContainer, StyledBarraProgresso, TextoProgresso } from "../style";
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
      <StyledBarraProgresso $progresso={progressoMeta} />
      <TextoProgresso>{progressoMeta}%</TextoProgresso>
    </BarraContainer>
  );
};

export default BarraProgresso;
