import Button from "../Button";

const ExerciseList = () => {
  const exercises = ["Bytebank", "Anybank", "Switch Bank"];
  return (
    <div className="exercise-list">
      <h2>Minhas contas</h2>
      <div>
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
        <Button>Adicionar conta</Button>
      </div>
    </div>
  );
};
export default ExerciseList;
