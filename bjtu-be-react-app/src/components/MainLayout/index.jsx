import { Layout } from "antd";
import React from "react";
import MenuLayout from "../MenuLayout";
import HeadLayout from "../HeadLayout";

const { Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div
            style={{
              height: "32px",
              margin: "16px",
              background: "rgba(255, 255, 255, 0.3)",
            }}
          />
          <MenuLayout />
        </Sider>
        <Layout style={{ background: "#fff" }}>
          <Content>
            <HeadLayout />
            <div style={{ minHeight: "660px" }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
