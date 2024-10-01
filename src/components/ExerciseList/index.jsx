const ExerciseList = () => {
  const exercises = ["Corrida", "Ciclismo", "Natação"]; // Exemplo de dados mockados
  return (
    <div className="exercise-list">
      <h2>Lista de Exercícios</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};
export default ExerciseList;
