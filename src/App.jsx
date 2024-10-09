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
} from "./components";

function App() {
  return (
    <div className="container">
      <BarraLateral />
      <BarraPesquisa />
      <SaudacaoUsuario />
      <section className="orcamento">
        <OrcamentoDiario />
        <MetaFinanceira />
      </section>
      <section className="movimentacoes-conta">
        <Transacoes />
        <Contas />
      </section>
      <BalancoFinanceiro />
    </div>
  );
}

export default App;
