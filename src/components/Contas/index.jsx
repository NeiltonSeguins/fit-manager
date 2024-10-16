import { useState } from "react";
import { Botao, Cartao, CartaoCabecalho, Modal, WalletIcon } from "..";
import Conta from "./Conta";
import { Container, ListaMovimentacoes } from "./style";
import { Fieldset, Form, InputText, Label } from "../../screens/Cadastro/style";
import { useDispatch, useSelector } from "react-redux";
import { adicionarConta } from "../../redux/slices/transacoesSlice";
import { atualizarSaldoOrcamento } from "../../redux/slices/usuarioSlice";
import { geraId } from "../../utils";

const Contas = () => {
  const dispatch = useDispatch();
  const contas = useSelector((state) => state.transacoes.contas);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaConta, setNovaConta] = useState({
    banco: "",
    saldo: 0,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddConta = () => {
    dispatch(adicionarConta({ id: geraId(), ...novaConta }));
    dispatch(atualizarSaldoOrcamento(parseInt(novaConta.saldo)));
    handleCloseModal();
  };

  return (
    <Cartao>
      <CartaoCabecalho>Minhas contas</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {contas.map((conta) => (
            <Conta key={conta.id} conta={conta} />
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
            aoClicar={() => handleAddConta()}
            titulo="Adicionar conta bancária"
            icon={<WalletIcon />}
          >
            <Form>
              <Fieldset>
                <Label htmlFor="banco">Banco</Label>
                <InputText
                  type="text"
                  id="banco"
                  placeholder="Ex: Anybank"
                  value={novaConta.banco}
                  onChange={(e) =>
                    setNovaConta({ ...novaConta, banco: e.target.value })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="saldo">Saldo</Label>
                <InputText
                  type="number"
                  id="saldo"
                  placeholder="R$ 500,00"
                  value={novaConta.saldo}
                  onChange={(e) =>
                    setNovaConta({ ...novaConta, saldo: e.target.value })
                  }
                />
              </Fieldset>
            </Form>
          </Modal>
        )}
      </Container>
    </Cartao>
  );
};
export default Contas;
