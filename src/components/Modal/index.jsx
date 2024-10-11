import React from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./style";
import Botao from "../Botao";

const Modal = ({ icon, titulo, onClose, children }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          {icon}
          {titulo}
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        {children}
        <ButtonGroup>
          <Botao variante="secundario" aoClicar={onClose}>
            Cancelar
          </Botao>
          <Botao variante="primario">Adicionar</Botao>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
