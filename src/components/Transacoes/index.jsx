import { useState } from "react";
import { Botao, Cartao, CartaoCabecalho, Transacao, Modal } from "..";
import { Container, ListaMovimentacoes } from "../Contas/style";
import { Fieldset, Form, InputText, Label } from "../../screens/Cadastro/style";
import MoneyIcon from "../Icones/MoneyIcon";

const movimentacoes = [
  { nome: "Bets", tipo: "receita", valor: "200,00", data: "10/10/2024" },
  { nome: "iFood", tipo: "despesa", valor: "200,00", data: "10/10/2024" },
  { nome: "Bets", tipo: "receita", valor: "200,00", data: "10/10/2024" },
];
const Transacoes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {movimentacoes.map((movimentacao, index) => (
            <Transacao key={index} transacao={movimentacao} />
          ))}
        </ListaMovimentacoes>
        <Botao aoClicar={() => handleOpenModal()}>
          <MoneyIcon />
          Adicionar transação
        </Botao>
        {isModalOpen && (
          <Modal
            onClose={() => handleCloseModal()}
            titulo="Adicionar transação"
            isOpen={isModalOpen}
            icon={<MoneyIcon />}
          >
            <Form>
              <Fieldset>
                <Label htmlFor="nomeTransacao">Nome da transação</Label>
                <InputText
                  type="text"
                  id="nomeTransacao"
                  placeholder="Ex: Compra na padaria"
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="valor">Valor</Label>
                <InputText type="text" id="valor" placeholder="R$ 500,00" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="valor">Data</Label>
                <InputText type="date" id="valor" placeholder="R$ 500,00" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="categoria">Categoria</Label>
                <InputText
                  type="text"
                  id="categoria"
                  placeholder="Alimentação"
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="contaBancaria">Conta Bancária</Label>
                <InputText
                  type="text"
                  id="contaBancaria"
                  placeholder="AnyBank"
                />
              </Fieldset>
            </Form>
          </Modal>
        )}
      </Container>
    </Cartao>
  );
};
export default Transacoes;
