import styled from "styled-components";
import CartaoCorpo from "../Cartao/CartaoCorpo";

export const Container = styled(CartaoCorpo)`
  padding: var(--padding-l) var(--padding-m);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListaMovimentacoes = styled.ul`
  list-style: none;
  color: var(--cor-primaria);
  margin: 0;
  padding-left: 0px;
  padding-bottom: var(--padding-m);
  width: 100%;
  height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const ItemConta = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--padding-m);
  border-bottom: 1px solid var(--cor-neutra-medium);
  color: var(--cor-neutra-light);
`;

export const TituloConta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-xs);

  & > h3 {
    margin: 0;
  }
`;

export const SaldoConta = styled.div`
  text-align: start;

  & > p {
    margin: 0;
  }
`;
