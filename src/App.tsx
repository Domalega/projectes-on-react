import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
