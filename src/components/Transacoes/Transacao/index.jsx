import { ItemTransacao, SaldoTransacao, TituloTransacao } from "../style";

const Transacao = ({ transacao }) => {
  return (
    <ItemTransacao>
      <TituloTransacao $tipo={transacao.tipo}>
        <h3>{transacao.nome}</h3>
        <span>R$ {transacao.valor}</span>
      </TituloTransacao>
      <SaldoTransacao className="transacao-saldo">
        <p>{transacao.data}</p>
      </SaldoTransacao>
    </ItemTransacao>
  );
};

export default Transacao;
