import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import CharacterDetails from "./components/character/CharacterDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <CharacterDetails />,
  },
]);
