import { formatarData, formatarMoeda } from "../../../utils";
import { ItemTransacao, SaldoTransacao, TituloTransacao } from "../style";

const Transacao = ({ transacao }) => {
  return (
    <ItemTransacao>
      <TituloTransacao $tipo={transacao.tipo}>
        <h3>{transacao.nome}</h3>
        <span>{formatarMoeda(transacao.valor)}</span>
      </TituloTransacao>
      <SaldoTransacao className="transacao-saldo">
        <p>{formatarData(transacao.data)}</p>
      </SaldoTransacao>
    </ItemTransacao>
  );
};

export default Transacao;
