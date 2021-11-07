import AntDesign from "@/pages/AntDesign";
import Home from "@/pages/Home";
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
    path: "*",
    element: NoFound,
  },
];
export default routes;
