import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cadastro from "./screens/Cadastro/Cadastro.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
