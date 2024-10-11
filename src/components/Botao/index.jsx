import { StyledButton } from "./style";

const Botao = ({ children, variante, aoClicar }) => {
  return (
    <StyledButton $variante={variante} onClick={aoClicar}>
      {children}
    </StyledButton>
  );
};

export default Botao;
