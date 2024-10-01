import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import TotalCalories from "./components/TotalCalories";
import BurnedCalories from "./components/BurnedCalories";
import ConsumedCalories from "./components/ConsumedCalories";
import FoodList from "./components/FoodList";
import ExerciseList from "./components/ExerciseList";
import CalorieChart from "./components/CalorieChart";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <SearchBar />
      <div className="calories-info">
        <TotalCalories />
        <BurnedCalories />
        <ConsumedCalories />
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
