import AntDesign from "@/pages/AntDesign";
import Home from "@/pages/Home";

const routes = [
  {
    path: "/home",
    key: "home",
    title: "首页",
    element: Home,
  },
  {
    path: "/antd",
    key: "antd",
    title: "Ant Design",
    element: AntDesign,
  },
];
export default routes;
