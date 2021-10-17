import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import HomePage from "./index";

export default [
  {
    path: "/",
    exact: true,
    component: HomePage,
    title: "首页",
    icon: <HomeOutlined />,
  },
];
