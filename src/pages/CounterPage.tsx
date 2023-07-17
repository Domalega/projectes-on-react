import React, { useState, useMemo } from "react";

interface CounterPageProps {}

const CounterPage: React.FC<CounterPageProps> = () => {
  const [counter, setCounter] = useState<number>(0);

  const memoizedCounter = useMemo(() => counter, [counter]);

  const DragStartHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Work");
  };

  const DragLeaveHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Work end");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Now is {memoizedCounter}</h1>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded shadow-emerald-500 shadow-md hover:bg-gray-400 hover:translate-x-1 hover:translate-y-1 duration-300"
          onClick={() => setCounter(counter + 1)}
        >
          PLUS
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded shadow-emerald-500 shadow-md hover:bg-gray-400 hover:translate-x-1 hover:translate-y-1 duration-300"
          onClick={() => setCounter(counter - 1)}
          onDragStart={(event) => DragStartHandler(event)}
          onDragLeave={(event) => DragLeaveHandler(event)}
          draggable={true}
        >
          MINUS
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
