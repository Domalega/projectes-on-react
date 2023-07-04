import React, { useState, useMemo } from "react";

interface ProjectPageProps {}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const [counter, setCounter] = useState<number>(0);

  const memoizedCounter = useMemo(() => counter, [counter]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div>
        <h1 className="d-flex align-items-center justify-content-center display-1 h1">
          Now is {memoizedCounter}
        </h1>
        <div className="d-flex justify-content-around">
          <button
            className="border-0 m-2 p-2 text-light bg-dark rounded display-5"
            onClick={() => setCounter(counter + 1)}
          >
            PLUS
          </button>
          <button
            className="border-1 m-2 p-2 text-light bg-dark rounded display-5"
            onClick={() => setCounter(counter - 1)}
          >
            MINUS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
