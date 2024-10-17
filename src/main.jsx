import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cadastro from "./screens/Cadastro/Cadastro.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import GlobalStyle from "./GlobalStyle/index.jsx";

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
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
