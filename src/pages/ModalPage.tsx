import React, { useState } from "react";

interface ModalPageProps {}

const ModalPage: React.FC<ModalPageProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white w-1/2 p-6 rounded shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Some title</h2>
            <div className="mb-4 flex justify-center">
              <img src="pic/rick-roll.gif" alt="hehe" />
            </div>
            <button
              className="absolute top-0 right-0 mt-3 mr-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 hover:scale-150 duration-300 ease-in-out"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl border rounded-sm p-4 shadow-emerald-500 shadow-md hover:bg-gray-400 hover:translate-x-1 hover:translate-y-1 duration-300"
      >
        Show modal
      </button>
    </div>
  );
};

export default ModalPage;
