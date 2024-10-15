import { useState } from "react";
import { Botao, Cartao, CartaoCabecalho, Transacao, Modal } from "..";
import { Container, ListaMovimentacoes } from "../Contas/style";
import {
  Fieldset,
  Form,
  InputText,
  Label,
  SelectGroup,
  SelectOption,
} from "../../screens/Cadastro/style";
import MoneyIcon from "../Icones/MoneyIcon";
import { useDispatch, useSelector } from "react-redux";
import { adicionarMovimentacao } from "../../redux/slices/transacoesSlice";
import { atualizarOrcamento } from "../../redux/slices/usuarioSlice";

const Transacoes = () => {
  const dispatch = useDispatch();
  const movimentacoes = useSelector((state) => state.transacoes.movimentacoes);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaTransacao, setNovaTransacao] = useState({
    nome: "",
    valor: 0,
    tipo: "",
    categoria: "",
    conta: "",
    data: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTransacao = () => {
    dispatch(adicionarMovimentacao(novaTransacao));
    dispatch(
      atualizarOrcamento({
        valor: parseInt(novaTransacao.valor),
        tipo: novaTransacao.tipo,
      })
    );
    handleCloseModal();
  };

  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {movimentacoes.map((movimentacao) => (
            <Transacao key={movimentacao.nome} transacao={movimentacao} />
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
            aoClicar={() => handleAddTransacao()}
          >
            <Form>
              <Fieldset>
                <Label htmlFor="nomeTransacao">Nome da transação</Label>
                <InputText
                  type="text"
                  id="nomeTransacao"
                  placeholder="Ex: Compra na padaria"
                  value={novaTransacao.nome}
                  onChange={(e) =>
                    setNovaTransacao({ ...novaTransacao, nome: e.target.value })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="valor">Valor</Label>
                <InputText
                  type="number"
                  id="valor"
                  placeholder="10"
                  value={novaTransacao.valor}
                  onChange={(e) =>
                    setNovaTransacao({
                      ...novaTransacao,
                      valor: e.target.value,
                    })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="tipo">Tipo</Label>
                <SelectGroup
                  id="tipo"
                  value={novaTransacao.tipo}
                  onChange={(e) =>
                    setNovaTransacao({
                      ...novaTransacao,
                      tipo: e.target.value,
                    })
                  }
                >
                  <SelectOption value="">Selecione o tipo</SelectOption>
                  <SelectOption value="receita">Receita</SelectOption>
                  <SelectOption value="despesa">Despesa</SelectOption>
                </SelectGroup>
              </Fieldset>
              <Fieldset>
                <Label htmlFor="valor">Data</Label>
                <InputText
                  type="date"
                  id="valor"
                  placeholder="dd/mm/aaaa"
                  value={novaTransacao.data}
                  onChange={(e) =>
                    setNovaTransacao({ ...novaTransacao, data: e.target.value })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="categoria">Categoria</Label>
                <InputText
                  type="text"
                  id="categoria"
                  placeholder="Alimentação"
                  value={novaTransacao.categoria}
                  onChange={(e) =>
                    setNovaTransacao({
                      ...novaTransacao,
                      categoria: e.target.value,
                    })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="contaBancaria">Conta Bancária</Label>
                <InputText
                  type="text"
                  id="contaBancaria"
                  placeholder="AnyBank"
                  value={novaTransacao.conta}
                  onChange={(e) =>
                    setNovaTransacao({
                      ...novaTransacao,
                      conta: e.target.value,
                    })
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
export default Transacoes;
