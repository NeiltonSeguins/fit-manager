import { useDispatch, useSelector } from "react-redux";
import Cartao from "../Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo";
import { Descricao } from "../Cartao/style";
import { useEffect } from "react";
import { atualizarProgressoMeta } from "../../redux/slices/usuarioSlice";

const OrcamentoDiario = () => {
  const dispatch = useDispatch();
  const { orcamentoDiario, rendaMensal, objetivoFinanceiro } = useSelector(
    (state) => state.usuario
  );

  useEffect(() => {
    dispatch(atualizarProgressoMeta());
  }, [objetivoFinanceiro, rendaMensal, objetivoFinanceiro, dispatch]);

  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>R$ {orcamentoDiario}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default OrcamentoDiario;
