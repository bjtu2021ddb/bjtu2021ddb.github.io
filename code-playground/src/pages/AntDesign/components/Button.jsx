import { SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import React from "react";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  renderMenu() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return menu;
  }

  handleMenuClick = (menuItem) => {
    console.log(menuItem);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="container">
        <Space direction="vertical">
          {/* 5种类型 primay, defalut, dashed, text, link */}
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button type="default">Defalut Button</Button>
            <Button type="dashed">Deshed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space>

          <Space>
            {/* icon 和 shape */}
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Space>

          <Space>
            {/* loading */}
            <Button
              type="primary"
              loading={loading}
              icon={<SearchOutlined />}
              onClick={() => {
                this.setState({ loading: !loading });
                setTimeout(() => {
                  this.setState({ loading: false });
                }, 3000);
              }}
            >
              Search
            </Button>
          </Space>

          <Space>
            {/* Dropdown.Button overlay 是 Menu */}
            <Dropdown.Button type="defalut" overlay={this.renderMenu()}>
              Actions
            </Dropdown.Button>
          </Space>

          <Space>
            {/* 4种属性 danger, ghost, loading, disabled */}
            <Button type="primary" disabled>
              Disabled Button
            </Button>
            <Button type="primary" ghost>
              Ghost Button
            </Button>
            <Button type="default" danger>
              danger Button
            </Button>
            <Button type="primary" loading>
              Loading...
            </Button>
          </Space>
        </Space>
      </div>
    );
  }
}

export default ButtonComponent;
