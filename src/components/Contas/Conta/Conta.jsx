import styled from "styled-components";
import { formatarMoeda } from "../../../utils";
import BankIcon from "@components/Icones/BankIcon/BankIcon";

export const ItemConta = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-m) 0;
  border-bottom: 1px solid var(--cor-neutra-medium);
  color: var(--cor-neutra-light);

  &:nth-child(1) {
    padding-top: 0;
  }
`;

export const TituloConta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-xs);

  & > h3 {
    margin: 0;
  }
`;

export const SaldoConta = styled.div`
  text-align: start;

  & > p {
    margin: 0;
  }
`;

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