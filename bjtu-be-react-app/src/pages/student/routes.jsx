import React from "react";
import { ReadOutlined } from "@ant-design/icons";
import StudentPage from "./edit";
import StudentsPage from "./list";

export default [
  {
    path: "/student/list",
    component: StudentsPage,
    title: "校友录",
    icon: <ReadOutlined />,
  },
  {
    path: "/student/:_id",
    component: StudentPage,
    title: "校友详情",
  },
];
