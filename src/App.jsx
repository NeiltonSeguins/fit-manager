import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import TotalCalories from "./components/TotalCalories";
import BurnedCalories from "./components/BurnedCalories";
import FoodList from "./components/FoodList";
import ExerciseList from "./components/ExerciseList";
import SaudacaoUsuario from "./components/SaudacaoUsuario";
import CalorieChart from "./components/CalorieChart";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <SearchBar />
      <SaudacaoUsuario />
      <div className="calories-info">
        <TotalCalories />
        <BurnedCalories />
      </div>
      <div className="food-exercise-lists">
        <FoodList />
        <ExerciseList />
      </div>
      <CalorieChart />
    </div>
  );
}

export default App;
