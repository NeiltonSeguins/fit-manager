import Cartao from "../Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo";
import { Descricao } from "../Cartao/style";

const OrcamentoDiario = () => {
  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>R$ 2000</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default OrcamentoDiario;
