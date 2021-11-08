import React from "react";
import { Button, Space } from "antd";

class ButtonComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Space>
          <Button type="primary">Primary Button</Button>
          <Button type="default">Defalut Button</Button>
          <Button type="dashed">Deshed Button</Button>
        </Space>
      </div>
    );
  }
}

export default ButtonComponent;
