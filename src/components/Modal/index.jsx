import React, { useCallback, useEffect } from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./style";
import Botao from "../Botao";

const Modal = ({ icon, titulo, onClose, children, isOpen, aoClicar }) => {
  const escutadorTecla = useCallback(
    (evento) => {
      if (evento.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escutadorTecla);
    }

    return () => {
      document.removeEventListener("keydown", escutadorTecla);
    };
  }, [isOpen, escutadorTecla]);

  return (
    <ModalOverlay>
      <ModalContainer open={isOpen} onClose={onclose}>
        <ModalHeader>
          <div>
            {icon}
            {titulo}
          </div>
          <CloseButton onClick={onClose}>x</CloseButton>
        </ModalHeader>
        {children}
        <ButtonGroup>
          <Botao variante="secundario" aoClicar={onClose}>
            Cancelar
          </Botao>
          <Botao variante="primario" aoClicar={aoClicar}>
            Adicionar
          </Botao>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
