import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  color: var(--cor-neutra-light);
  background-color: transparent;
  font-size: var(--fonte-md);
  border: none;
  outline: transparent;

  &::placeholder {
    color: var(--cor-neutra-light);
  }
`;
