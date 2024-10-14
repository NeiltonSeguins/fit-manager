import React, { useCallback, useEffect, useRef } from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./style";
import Botao from "../Botao";

const Modal = ({ icon, titulo, onClose, children, isOpen }) => {
  const modalRef = useRef(null);

  const escutadorTecla = useCallback(
    (evento) => {
      if (evento.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const capturarFoco = useCallback((evento) => {
    if (!modalRef.current?.contains(evento.target)) {
      modalRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escutadorTecla);
      document.addEventListener("focusin", capturarFoco);

      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", escutadorTecla);
      document.removeEventListener("focusin", capturarFoco);
    };
  }, [isOpen, capturarFoco, escutadorTecla]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer open={isOpen} onClose={onclose} ref={modalRef}>
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
          <Botao variante="primario">Adicionar</Botao>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
