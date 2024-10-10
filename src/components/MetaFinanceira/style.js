import styled from "styled-components";

export const TituloMetaFinanceira = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  font-size: var(--fonte-l);
  color: var(--cor-secundaria-receita);
  margin: 0;
`;

export const BarraContainer = styled.div`
  background-color: #1c1c1c;
  border-radius: var(--border-radius-s);
  overflow: hidden;
  height: 40px;
  margin-top: 20px;
  width: 300px;
`;

export const StyledBarraProgresso = styled.div`
  background-color: var(--cor-primaria);
  height: 100%;
  width: ${({ $progresso }) => $progresso}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cor-neutra-light);
  font-size: 1rem;
  transition: width 0.5s ease-in-out;
`;
