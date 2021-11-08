import AntDesign from "@/pages/AntDesign";
import Home from "@/pages/Home";
import Immutability from "@/pages/Immutability";
import NoFound from "@/pages/NoFound";

const routes = [
  {
    key: "home",
    title: "首页",
    path: "/",
    exact: true,
    element: Home,
  },
  {
    key: "antd",
    title: "Ant Design",
    path: "antd",
    element: AntDesign,
  },
  {
    key: "immutable",
    title: "Immutability Helper",
    path: "immutable",
    element: Immutability,
  },
  {
    path: "*",
    element: NoFound,
  },
];
export default routes;
