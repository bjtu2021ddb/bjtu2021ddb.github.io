import React from "react";
import { Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class ButtonComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Space direction="vertical">
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button type="default">Defalut Button</Button>
            <Button type="dashed">Deshed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space>

          <Space>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Space>
        </Space>
      </div>
    );
  }
}

export default ButtonComponent;
