import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Error from "./Error";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/*",
      element: <Error />,
    },
  ]);

  return (
    <div className="m-0 p-0">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
