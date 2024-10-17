import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: var(--fonte-l);
  color: var(--cor-neutra-light);
  background-color: var(--cor-neutra-medium);
  border-radius: var(--border-radius-l) var(--border-radius-l) 0px 0px;
  padding: var(--padding-s) var(--padding-l);
  margin: 0;
`;

const CartaoCabecalho = ({ children }) => {
  return <Titulo>{children}</Titulo>;
};

export default CartaoCabecalho;
