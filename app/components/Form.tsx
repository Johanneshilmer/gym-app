"use client";
import { useState, useEffect } from "react";
export default function Form() {
  const [exerciseItems, setExerciseItems] = useState<JSX.Element[]>([]);
  const [formItems, setFormItems] = useState<JSX.Element[]>([]);

  // Add Exercise
  const handleExerciseItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExerciseItems((prev) => [
      ...prev,
      <div key={prev.length}>
        <div>
          <h1>Ny Övning</h1>
          {formItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <button onClick={handleSetItem}>Add Set</button>
        </div>
      </div>,
    ]);
  };

  // Add more sets to the exercise.
  const handleSetItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormItems((prev) => [
      ...prev,
      <p key={prev.length}>
        <input type="text" />
        <button>Reps</button>
      </p>,
    ]);
  };

  useEffect(() => {
    setFormItems(formItems);
  }, [formItems]);

  return (
    <form>
      <div>
        {exerciseItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button onClick={handleExerciseItem}>Add Exercise</button>
    </form>
  );
}
