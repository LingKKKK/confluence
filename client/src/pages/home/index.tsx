import React, { Component, Suspense } from 'react';
import { Switch, Redirect, Router } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { createHashHistory } from 'history';
import { onConnect, removeAllListeners, disconnect } from '@components/Socket/index';
import LayoutHeader from '@components/LayoutHeader/index';
import NavHeader from '@components/Header/index';
import Menu from './components/menu';
import routeConfig from '@/routeConfig';
import './index.less';

const { Header, Content, Sider } = Layout;

const history = createHashHistory();
class Index extends Component {
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
    return (
      <Router history={history}>
        <NavHeader />
        <Layout className="homeLayout">
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              left: 0,
              borderRight: '1px solid #f2f2f2'
            }}
            theme="light"
          >
            <div className="logo" />
            <Menu />
          </Sider>
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
