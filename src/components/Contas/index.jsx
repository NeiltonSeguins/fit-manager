import { useState } from "react";
import { Botao, Cartao, CartaoCabecalho, Modal, WalletIcon } from "..";
import Conta from "./Conta";
import { Container, ListaMovimentacoes } from "./style";
import { Fieldset, Form, InputText, Label } from "../../screens/Cadastro/style";

const Contas = () => {
  const contas = [{ nome: "Bytebank", saldo: "15000,00" }];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Cartao>
      <CartaoCabecalho>Minhas contas</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {contas.map((conta, index) => (
            <Conta key={index} conta={conta} />
          ))}
        </ListaMovimentacoes>
        <Botao aoClicar={() => handleOpenModal()}>
          <WalletIcon />
          Adicionar conta
        </Botao>
        {isModalOpen && (
          <Modal
            onClose={() => handleCloseModal()}
            isOpen={isModalOpen}
            titulo="Adicionar conta bancária"
            icon={<WalletIcon />}
          >
            <Form>
              <Fieldset>
                <Label htmlFor="nomeTransacao">Banco</Label>
                <InputText
                  type="text"
                  id="nomeTransacao"
                  placeholder="Ex: Anybank"
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="valor">Saldo</Label>
                <InputText type="text" id="valor" placeholder="R$ 500,00" />
              </Fieldset>
            </Form>
          </Modal>
        )}
      </Container>
    </Cartao>
  );
};
export default Contas;
