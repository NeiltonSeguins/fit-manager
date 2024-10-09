import { Botao, Transacao } from "..";
import MoneyIcon from "../Icones/MoneyIcon";

const Transacoes = () => {
  const movimentacoes = [
  ];
  return (
    <div className="lista-transacoes">
      <h2>Movimentação financeira</h2>
      <div>
        <ul>
          {movimentacoes.map((movimentacao, index) => (
            <Transacao key={index} transacao={movimentacao} />
          ))}
        </ul>
        <Botao>
          <MoneyIcon />
          Adicionar transação
        </Botao>
      </div>
    </div>
  );
};
export default Transacoes;
