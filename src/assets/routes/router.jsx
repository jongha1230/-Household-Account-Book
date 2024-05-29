import { createBrowserRouter } from "react-router-dom";
import { ExpenseDetailWrapper } from "../pages/ExpenseDetail";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/expenses/:itemId",
    element: <ExpenseDetailWrapper />,
  },
]);

export default router;
