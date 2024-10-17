import styled from "styled-components";

export const Corpo = styled.div`
  background-color: var(--cor-neutra-dark-medium);
  padding: var(--padding-l) var(--padding-m);
  border-radius: 0px 0px var(--border-radius-l) var(--border-radius-l);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-height: 100px;
`;

const CartaoCorpo = ({ children }) => {
  return <Corpo>{children}</Corpo>;
};

export default CartaoCorpo;