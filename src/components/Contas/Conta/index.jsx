import { formatarMoeda } from "../../../utils";
import BankIcon from "../../Icones/BankIcon";
import { ItemConta, SaldoConta, TituloConta } from "../style";

const Conta = ({ conta }) => {
  return (
    <ItemConta className="conta">
      <TituloConta className="conta-titulo">
        <BankIcon />
        <h3>{conta.banco}</h3>
      </TituloConta>
      <SaldoConta className="conta-saldo">
        <p>Saldo</p>
        <span>{formatarMoeda(conta.saldo)}</span>
      </SaldoConta>
    </ItemConta>
  );
};

export default Conta;
