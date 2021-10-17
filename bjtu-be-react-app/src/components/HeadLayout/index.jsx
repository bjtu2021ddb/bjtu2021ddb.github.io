import homeRoutes from "@/pages/home/routes.jsx";
import studentRoutes from "@/pages/student/routes.jsx";
import { Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
import React from "react";

class HeadLayout extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [homeRoutes[0], studentRoutes[0]];
    this.state = { selectedKey: this.getTitle(homeRoutes[0].path) };

    const { history } = this.props;

    history.listen((route) => {
      this.setState({
        selectedKey: this.getTitle(route.pathname),
      });
    });
  }

  getTitle(pathname) {
    return this.menuItems.find((r) => r.path === pathname).title;
  }

  componentDidMount() {
    const { history } = this.props;
    this.setState({
      selectedKey: this.getTitle(history.location.pathname),
    });
  }

  render() {
    const { selectedKey } = this.state;
    return (
      <Breadcrumb style={{ padding: "16px", background: "#eee" }}>
        <Breadcrumb.Item>{selectedKey}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default withRouter(HeadLayout);
