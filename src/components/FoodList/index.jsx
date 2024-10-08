import Button from "../Button";

const FoodList = () => {
  const foods = ["iFood", "Amazon Prime", "Gympass"];
  return (
    <div className="food-list">
      <h2>Movimentação financeira</h2>
      <div>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
        <Button>Adicionar transação</Button>
      </div>
    </div>
  );
};
export default FoodList;
