import { RouterProvider } from "react-router-dom";
import { router } from "./RouteConfig";

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
