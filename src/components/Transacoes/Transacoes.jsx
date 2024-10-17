import { useState } from "react";
import CampoTexto from "@components/CampoTexto";
import MoneyIcon from "@components/Icones/MoneyIcon/MoneyIcon";
import { Container, ListaMovimentacoes } from "@components/Contas/Contas";
import Transacao from "./Transacao/Transacao";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import Botao from "@components/Botao";
import { SelectGroup, SelectOption } from "@components/Select";
import Modal from "@components/Modal";
import Form from "@components/Form";
import Fieldset from "@components/Fieldset";
import Label from "@components/Label";
import { useDispatch, useSelector } from "react-redux";
import { adicionarMovimentacao } from "../../redux/slices/transacoesSlice";
import { atualizarOrcamento } from "../../redux/slices/usuarioSlice";
import { v4 as uuidv4 } from "uuid";

export const formataData = (dataISO) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
};

const Transacoes = () => {
  const dispatch = useDispatch();
  const movimentacoes = useSelector((state) => state.transacoes.movimentacoes);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaTransacao, setNovaTransacao] = useState({
    nome: "",
    valor: 0,
    tipo: "",
    categoria: "",
    data: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTransacao = () => {
    dispatch(adicionarMovimentacao({ id: uuidv4(), ...novaTransacao }));
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
            <Transacao key={movimentacao.id} transacao={movimentacao} />
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
                <CampoTexto
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
                <CampoTexto
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
                <CampoTexto
                  type="date"
                  id="valor"
                  placeholder="dd/mm/aaaa"
                  value={novaTransacao.data}
                  onChange={(e) =>
                    setNovaTransacao({
                      ...novaTransacao,
                      data: e.target.value,
                    })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="categoria">Categoria</Label>
                <CampoTexto
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
            </Form>
          </Modal>
        )}
      </Container>
    </Cartao>
  );
};
export default Transacoes;
