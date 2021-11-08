import React from "react";
import { Divider } from "antd";
import { Outlet } from "react-router-dom";

class HeadLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <div className="container">
        <Divider>{title}</Divider>
        <Outlet />
      </div>
    );
  }
}

export default HeadLayout;
