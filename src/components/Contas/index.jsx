import { Botao, WalletIcon } from "..";
import Conta from "./Conta";

const Contas = () => {
  const contas = [
  ];
  return (
    <div className="lista-contas">
      <h2>Minhas contas</h2>
      <div>
        <ul>
          {contas.map((conta, index) => (
            <Conta key={index} conta={conta} />
          ))}
        </ul>
        <Botao>
          <WalletIcon />
          Adicionar conta
        </Botao>
      </div>
    </div>
  );
};
export default Contas;
