import { useState } from "react";
import MoneyIcon from "@components/Icones/MoneyIcon/MoneyIcon";
import { Container, ListaMovimentacoes } from "@components/Contas/Contas";
import Transacao from "./Transacao/Transacao";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import Botao from "@components/Botao";
import { useSelector } from "react-redux";
import TransacaoModal from "./TransacaoModal";

export const formataData = (dataISO) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
};

const Transacoes = () => {
  const transacoes = useSelector((state) => state.transacoes.transacoes);

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
          {transacoes.map((transacao) => (
            <Transacao key={transacao.id} transacao={transacao} />
          ))}
        </ListaMovimentacoes>
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <MoneyIcon />
          Adicionar transação
        </Botao>
        {isModalOpen && (
          <TransacaoModal
            isOpen={isModalOpen}
            onCloseModal={() => handleCloseModal()}
          />
        )}
      </Container>
    </Cartao>
  );
};
export default Transacoes;
