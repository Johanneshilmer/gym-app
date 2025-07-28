import { useState } from "react";

type Set = { reps: string };
type Exercise = { sets: Set[] };

export default function Form() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // Add Exercise
  const handleAddExercise = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExercises((prev) => [...prev, { sets: [] }]);
  };

  // Add Set to a specific exercise
  const handleAddSet =
    (exerciseIndex: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setExercises((prev) =>
        prev.map((item, index) =>
          index === exerciseIndex
            ? { ...item, sets: [...item.sets, { reps: "" }] }
            : item,
        ),
      );
    };

  return (
    <form>
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex}>
          <h1>Ny Övning</h1>
          {exercise.sets.map((item, setIndex) => (
            <p key={setIndex}>
              <input type="text" value={item.reps} readOnly />
              <button>Reps</button>
            </p>
          ))}
          <button onClick={handleAddSet(exerciseIndex)}>Add Set</button>
        </div>
      ))}
      <button onClick={handleAddExercise}>Add Exercise</button>
    </form>
  );
}
