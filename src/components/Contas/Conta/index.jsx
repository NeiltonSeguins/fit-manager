import BankIcon from "../../Icones/BankIcon";

const Conta = ({ conta }) => {
  return (
    <li className="conta">
      <div className="conta-titulo">
        <BankIcon />
        <h3>{conta.nome}</h3>
      </div>
      <div className="conta-saldo">
        <p>Saldo</p>
        <span>R$ {conta.saldo}</span>
      </div>
    </li>
  );
};

export default Conta;
