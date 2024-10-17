import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  background-color: ${(props) =>
    props.$variante === "primario" ? "var(--cor-primaria)" : "transparent"};
  border: 1px solid
    ${(props) =>
      props.$variante === "primario"
        ? "var(--cor-primaria)"
        : props.$variante === "secundario"
        ? "var(--cor-primaria)"
        : "var(--cor-neutra-light)"};
  border-radius: var(--border-radius-l);
  padding: var(--padding-xs) var(--padding-m);
  color: ${(props) =>
    props.$variante === "primario"
      ? "var(--cor-neutra-dark)"
      : props.$variante === "secundario"
      ? "var(--cor-primaria)"
      : "var(--cor-neutra-light)"};
  cursor: pointer;
  font-size: var(--fonte-md);
`;

const Botao = ({ children, variante, aoClicar }) => {
  return (
    <StyledButton $variante={variante} onClick={aoClicar}>
      {children}
    </StyledButton>
  );
};

export default Botao;
