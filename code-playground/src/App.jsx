import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import initRoutes from "./routes";

const App = () => {
  const routes = useRoutes(
    initRoutes.map((route) => {
      return {
        path: route.path,
        exact: route.exact,
        element: <route.element />,
      };
    })
  );
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
