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

// Registrar os componentes necessários
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const CalorieChart = () => {
  const data = {
    labels: ["Entradas", "Saídas", "Balanço"],
    datasets: [
      {
        label: "Calorias",
        data: [2000, 1500, 500], // Exemplo de dados
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(8, 172, 30, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(8, 172, 30, 1)",
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
    <div className="calorie-chart">
      <h2>Balanço financeiro</h2>
      <div>
        <div className="chart-area">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
export default CalorieChart;
