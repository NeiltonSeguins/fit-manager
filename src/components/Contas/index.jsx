import { Botao, Cartao, CartaoCabecalho, WalletIcon } from "..";
import Conta from "./Conta";
import { Container, ListaMovimentacoes } from "./style";

const Contas = () => {
  const contas = [{ nome: "Bytebank", saldo: "15000,00" }];
  return (
    <Cartao>
      <CartaoCabecalho>Minhas contas</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {contas.map((conta, index) => (
            <Conta key={index} conta={conta} />
          ))}
        </ListaMovimentacoes>
        <Botao>
          <WalletIcon />
          Adicionar conta
        </Botao>
      </Container>
    </Cartao>
  );
};
export default Contas;
