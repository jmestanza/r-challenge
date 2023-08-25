import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import CharacterDetailsCard from "./components/character/CharacterDetailsCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <CharacterDetailsCard />,
  },
]);
