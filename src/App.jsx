import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import router from "./assets/routes/router.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
