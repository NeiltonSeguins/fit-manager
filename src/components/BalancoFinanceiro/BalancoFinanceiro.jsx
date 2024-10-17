import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";

// Registrar os componentes necessários
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export const AreaChart = styled.div`
  padding: var(--padding-xs);
  width: 50%;
  height: 50%;
`;

const BalancoFinanceiro = () => {
  const movimentacoes = useSelector((state) => state.transacoes.movimentacoes);

  const agruparPorCategoria = () => {
    return movimentacoes.reduce((valorAcumulado, transacao) => {
      if (transacao.tipo === "despesa") {
        valorAcumulado[transacao.categoria] =
          (valorAcumulado[transacao.categoria] || 0) +
          parseFloat(transacao.valor);
      }
      return valorAcumulado;
    }, {});
  };

  const categoriasAgrupadas = agruparPorCategoria();

  const data = {
    labels: Object.keys(categoriasAgrupadas),
    datasets: [
      {
        label: "Gastos por categoria",
        data: Object.values(categoriasAgrupadas),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <Cartao>
      <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
      <CartaoCorpo>
        <AreaChart>
          <Pie data={data} options={options} />
        </AreaChart>
      </CartaoCorpo>
    </Cartao>
  );
};
export default BalancoFinanceiro;