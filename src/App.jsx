import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import { ExpenseProvider } from "./assets/contexts/expense.context";
import router from "./assets/routes/router.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <ExpenseProvider>
        <RouterProvider router={router} />
      </ExpenseProvider>
    </>
  );
}

export default App;
