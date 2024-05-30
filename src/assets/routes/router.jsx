import { createBrowserRouter } from "react-router-dom";
import ExpenseDetail from "../pages/ExpenseDetail";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/expenses/:itemId",
    element: <ExpenseDetail />,
  },
]);

export default router;
