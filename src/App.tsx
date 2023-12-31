import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CounterPage from "./pages/CounterPage";
import ModalPage from "./pages/ModalPage";
import ListUsersPage from "./pages/ListUsersPage";
import NavBar from "./components/NavBar/NavBar";
import ConverterPage from "./pages/ConverterPage";
import ReduxPage from "./pages/ReduxPage";

interface Ilink {
  page: string;
  path: string;
  component: React.ComponentType<any>;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const routes: Ilink[] = [
    { page: "Menu", path: "/", component: MenuPage },
    { page: "Counter", path: "/counter", component: CounterPage },
    { page: "Modal", path: "/modal", component: ModalPage },
    { page: "List", path: "/list", component: ListUsersPage },
    { page: "ConverterPage", path: "/convert", component: ConverterPage },
    { page: "ReduxPage", path: "/redux", component: ReduxPage },
  ];
  return (
    <BrowserRouter>
      <NavBar links={routes} />
      <Routes>
        {routes.map((route) => {
          if (route.page !== "Menu")
            return (
              <Route
                key={route.page}
                path={route.path}
                element={<route.component />}
              />
            );
          if (route.page === "Menu")
            return (
              <Route
                key={route.page}
                path={route.path}
                element={<route.component links={routes} />}
              />
            );
          return null;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
