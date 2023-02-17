import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { Layout } from "../components";
import { routeData } from "../constant/routeData";
import SwitchModeContext from "../context/SwitchModeContext";
import Charts from "../view/Charts/Charts";
import Create from "../view/Create/Create";
import Dashboard from "../view/Dashboard/Dashboard";
import Teams from "../view/Teams/Teams";

function getElement(name) {
  switch (name) {
    case "Dashboard":
      return <Dashboard />;
    case "Teams":
      return <Teams />;
    case "Create":
      return <Create />;
    case "Charts":
      return <Charts />;
    default:
      return <Dashboard />;
  }
}

const AppOutlet = () => (
  <SwitchModeContext>
    <Layout>
      <Outlet />
    </Layout>
  </SwitchModeContext>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppOutlet />}> 
      {routeData.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={getElement(route.name)}
        />
      ))}
    </Route>
  )
);
