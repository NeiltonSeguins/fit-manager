import React, { useEffect, useState } from "react";
import { BarraContainer, StyledBarraProgresso } from "../style";

const BarraProgresso = ({ saldoAtual, valorInicial }) => {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    // Calcular o progresso com base no saldo atual e valor inicial
    const calculoProgresso = Math.min((saldoAtual / valorInicial) * 100, 100);
    setProgresso(calculoProgresso.toFixed(0));
  }, [saldoAtual, valorInicial]);

  return (
    <BarraContainer>
      <StyledBarraProgresso $progresso={progresso}>
        {progresso}%
      </StyledBarraProgresso>
    </BarraContainer>
  );
};

export default BarraProgresso;
