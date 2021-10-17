import homeRoutes from "@/pages/home/routes.jsx";
import studentRoutes from "@/pages/student/routes.jsx";
import { Menu } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";

class MenuLayout extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [homeRoutes[0], studentRoutes[0]];
    this.state = { selectedKey: "/" };

    const { history } = this.props;

    history.listen((route) => {
      this.setState({
        selectedKey: route.pathname,
      });
    });
  }

  componentDidMount() {
    const { history } = this.props;
    this.setState({ selectedKey: history.location.pathname });
  }

  menuItemClick = (menuItem) => {
    const { history } = this.props;
    history.push(menuItem.path);
  };

  render() {
    const { selectedKey } = this.state;

    return (
      <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline">
        {this.menuItems.map((menuItem) => {
          return (
            <Menu.Item
              key={menuItem.path}
              icon={menuItem.icon}
              onClick={() => this.menuItemClick(menuItem)}
            >
              {menuItem.title}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default withRouter(MenuLayout);
