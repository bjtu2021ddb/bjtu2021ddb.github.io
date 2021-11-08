import HeadLayout from "@/layouts/HeadLayout";
import { ButtonComponent, GridComponent } from "@/pages/AntDesign";
import Immutability from "@/pages/Immutability";
import NoFound from "@/pages/NoFound";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
    {
      path: "antd",
      element: <HeadLayout title="Ant Design" />,
      children: [
        {
          path: "button",
          element: <ButtonComponent />,
        },
        {
          path: "grid",
          element: <GridComponent />,
        },
      ],
    },
    {
      path: "immutable",
      element: <HeadLayout title="Immutability Helper" />,
      children: [
        {
          index: true,
          element: <Immutability />,
        },
      ],
    },
    {
      path: "*",
      element: <NoFound />,
    },
  ]);
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
