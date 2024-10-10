import { StyledButton } from "./style";

const Botao = ({ children, variante }) => {
  return <StyledButton $variante={variante}>{children}</StyledButton>;
};

export default Botao;
