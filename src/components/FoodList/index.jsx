const FoodList = () => {
  const foods = ["Maçã", "Banana", "Arroz"]; // Exemplo de dados mockados
  return (
    <div className="food-list">
      <h2>Lista de Alimentos</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};
export default FoodList;
