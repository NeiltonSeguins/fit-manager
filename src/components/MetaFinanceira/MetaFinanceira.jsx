import styled from "styled-components";
import { Cartao, CartaoCabecalho, Descricao } from "@components/Cartao";
import { CartaoCorpo } from "@components/Cartao";
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
  const objetivoTipos = useSelector((state) => state.objetivos.objetivo);
  const objetivo = objetivoTipos[objetivoFinanceiro] || "";

  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>
          <TituloMetaFinanceira>
            <PigIcon />
            {objetivo}
          </TituloMetaFinanceira>
          <BarraProgresso />
        </Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default MetaFinanceira;
