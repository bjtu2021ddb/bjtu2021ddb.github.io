import { Space } from "antd";
import React from "react";

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Space direction="vertical">grid</Space>
      </div>
    );
  }
}

export default GridComponent;
