import { useDispatch, useSelector } from "react-redux";
import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import { Descricao } from "../Cartao";
import { useEffect } from "react";
import { atualizarProgressoMeta } from "../../redux/slices/usuarioSlice";
import { formatarMoeda } from "../../utils";

const OrcamentoDiario = () => {
  const dispatch = useDispatch();
  const { orcamentoDiario, rendaMensal, objetivoFinanceiro } = useSelector(
    (state) => state.usuario
  );

  useEffect(() => {
    dispatch(atualizarProgressoMeta());
  }, [
    orcamentoDiario,
    objetivoFinanceiro,
    rendaMensal,
    objetivoFinanceiro,
    dispatch,
  ]);

  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>{formatarMoeda(orcamentoDiario)}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default OrcamentoDiario;
