import Cartao from "../Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho";
import { Corpo, Descricao } from "../Cartao/style";

const MetaFinanceira = () => {
  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <Corpo>
        <Descricao>R$ 500</Descricao>
      </Corpo>
    </Cartao>
  );
};
export default MetaFinanceira;
