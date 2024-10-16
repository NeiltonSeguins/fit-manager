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
  background-color: var(--cor-neutra-dark);
  border-radius: var(--border-radius-s);
  overflow: hidden;
  height: 40px;
  margin-top: 20px;
  width: 300px;
  position: relative;
`;

export const StyledBarraProgresso = styled.div`
  background-color: var(--cor-primaria);
  height: 100%;
  width: ${({ $progresso }) => $progresso}%;
  transition: width 0.5s ease-in-out;
`;

export const TextoProgresso = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cor-neutra-light);
  font-size: 1rem;
`;
