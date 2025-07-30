import { useState } from "react";
import { Button } from "flowbite-react";
import "./Form.css";

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
    <form className="p-6">
      <div className="flex flex-wrap gap-6">
        {exercises.map((exercise, exerciseIndex) => (
          <div
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 min-w-[320px] flex-1"
            key={exerciseIndex}
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
              Övning {exerciseIndex + 1}
            </h2>
            <div className="space-y-6">
              {exercise.sets.map((item, setIndex) => (
                <div
                  key={setIndex}
                  className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-700"
                >
                  <h3 className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Set {setIndex + 1}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Reps */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Reps
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l p-2 h-10"
                        >
                          -
                        </button>
                        <input
                          value={item.reps}
                          type="text"
                          className="bg-white dark:bg-gray-800 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-16"
                          placeholder="Reps"
                          required
                          readOnly
                        />
                        <button
                          type="button"
                          className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r p-2 h-10"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Weight */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Weight (kg)
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l p-2 h-10"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="bg-white dark:bg-gray-800 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-16"
                          placeholder="Weight"
                          required
                          readOnly
                        />
                        <button
                          type="button"
                          className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r p-2 h-10"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="mt-4 w-full"
              color="light"
              onClick={handleAddSet(exerciseIndex)}
            >
              Add Set
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button color="blue" onClick={handleAddExercise}>
          Add Exercise
        </Button>
      </div>
    </form>
  );
}
