import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrar os componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CalorieChart = () => {
  const data = {
    labels: ["Consumidas", "Queimadas", "Total"],
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

  return (
    <div className="calorie-chart">
      <h3>Gráfico de Calorias Consumidas vs. Queimadas</h3>
      <Bar data={data} />
    </div>
  );
};
export default CalorieChart;
