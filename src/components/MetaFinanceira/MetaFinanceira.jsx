import styled from "styled-components";
import { Cartao, CartaoCabecalho, Descricao } from "@components/Cartao";
import { Corpo } from "@components/Cartao/CartaoCorpo/CartaoCorpo";
import { PigIcon } from "@components/Icones";
import BarraProgresso from "@components/MetaFinanceira/BarraProgresso/BarraProgresso";
import { useSelector } from "react-redux";

export const TituloMetaFinanceira = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  font-size: var(--fonte-l);
  color: var(--cor-secundaria-receita);
  margin: 0;
`;

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
