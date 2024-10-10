import Cartao from "../Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho";
import { Corpo, Descricao } from "../Cartao/style";
import BarraProgresso from "./BarraProgresso";
import { PigIcon } from "..";
import { TituloMetaFinanceira } from "./style";

const MetaFinanceira = () => {
  const valorInicial = 1000;
  const saldoAtual = 700;
  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <Corpo>
        <Descricao>
          <TituloMetaFinanceira>
            <PigIcon />
            Economizar
          </TituloMetaFinanceira>
          <BarraProgresso valorInicial={valorInicial} saldoAtual={saldoAtual} />
        </Descricao>
      </Corpo>
    </Cartao>
  );
};
export default MetaFinanceira;
