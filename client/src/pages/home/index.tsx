import React, { Component, Suspense } from "react";
import { Switch, Redirect, Router } from "react-router-dom";
import { Layout, Spin } from "antd";
import { createHashHistory } from "history";
import { onConnect, removeAllListeners, disconnect } from "@components/Socket/index";
import LayoutHeader from "@components/LayoutHeader/index";
import NavHeader from "@components/Header/index";
import Menu from "./components/menu";
import routeConfig from "@/routeConfig";
import "./index.less";

const { Header, Content, Sider } = Layout;

const history = createHashHistory();
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    disconnect();
    removeAllListeners();
    onConnect();
  }

  render() {
    const silderStyle = {
      overflow: "auto",
      height: "100vh",
      left: 0,
      borderRight: "1px solid #f2f2f2"
      // display: history.location.pathname !== "/edit" ? 'block' : 'none'
    };
    console.log(history.location.pathname != "/edit");

    return (
      <Router history={history}>
        <NavHeader />
        <Layout className="homeLayout">
          {history.location.pathname != "/edit" && (
            <Sider style={silderStyle} theme="light">
              <div className="logo" />
              <Menu />
            </Sider>
          )}
          <Layout>
            {/* <Header className="header">
              <LayoutHeader />
            </Header> */}
            <Content className="homeContent">
              <Suspense
                fallback={
                  <section className="page-spin">
                    <Spin />
                  </section>
                }
              >
                <Switch>
                  {routeConfig}
                  {/* TODO: 重定向. 需要在目标页面校验后判断是否需要做二次跳转 */}
                  <Redirect from="/*" to="/user/login" />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Index;
