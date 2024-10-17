import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  text-align: center;
`;

const Cartao = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Cartao;
