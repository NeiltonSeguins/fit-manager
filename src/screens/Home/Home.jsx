import "./App.css";
import {
  BalancoFinanceiro,
  BarraLateral,
  BarraPesquisa,
  Contas,
  MetaFinanceira,
  OrcamentoDiario,
  SaudacaoUsuario,
  Transacoes,
} from "../../components";
import { Container, Movimentacoes, Orcamento } from "./style";

function Home() {
  return (
    <Container>
      <BarraLateral />
      <BarraPesquisa />
      <SaudacaoUsuario />
      <Orcamento>
        <OrcamentoDiario />
        <MetaFinanceira />
      </Orcamento>
      <Movimentacoes>
        <Transacoes />
        <Contas />
      </Movimentacoes>
      <BalancoFinanceiro />
    </Container>
  );
}

export default Home;
