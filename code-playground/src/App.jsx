import HeadLayout from "@/layouts/HeadLayout";
import { ButtonComponent, GridComponent } from "@/pages/AntDesign";
import Immutability from "@/pages/Immutability";
import NoFound from "@/pages/NoFound";
import { useRoutes } from "react-router-dom";
import "./App.less";

const App = () => {
  const element = useRoutes([
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

  return <div className="wrapper">{element}</div>;
};

export default App;
