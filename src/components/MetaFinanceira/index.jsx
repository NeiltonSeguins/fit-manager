import Cartao from "../Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho";
import { Corpo, Descricao } from "../Cartao/style";
import BarraProgresso from "./BarraProgresso";
import { PigIcon } from "..";
import { TituloMetaFinanceira } from "./style";
import { useSelector } from "react-redux";

const MetaFinanceira = () => {
  const objetivoFinanceiro = useSelector(
    (state) => state.usuario.objetivoFinanceiro
  );

  const objetivo = {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  };

  const objetivoTexto = objetivo[objetivoFinanceiro] || "";

  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <Corpo>
        <Descricao>
          <TituloMetaFinanceira>
            <PigIcon />
            {objetivoTexto}
          </TituloMetaFinanceira>
          <BarraProgresso />
        </Descricao>
      </Corpo>
    </Cartao>
  );
};
export default MetaFinanceira;
