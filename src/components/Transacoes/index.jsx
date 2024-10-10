import { Botao, Cartao, CartaoCabecalho, Transacao } from "..";
import { Container, ListaMovimentacoes } from "../Contas/style";
import MoneyIcon from "../Icones/MoneyIcon";

const Transacoes = () => {
  const movimentacoes = [
    { nome: "Bets", tipo: "receita", valor: "200,00", data: "10/10/2024" },
    { nome: "iFood", tipo: "despesa", valor: "200,00", data: "10/10/2024" },
    { nome: "Bets", tipo: "receita", valor: "200,00", data: "10/10/2024" },
  ];
  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {movimentacoes.map((movimentacao, index) => (
            <Transacao key={index} transacao={movimentacao} />
          ))}
        </ListaMovimentacoes>
        <Botao>
          <MoneyIcon />
          Adicionar transação
        </Botao>
      </Container>
    </Cartao>
  );
};
export default Transacoes;
