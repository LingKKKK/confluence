/*
 * 路由权限配置页面
 * @Date: 2019-07-18 10:33:21
 */
import React, { Component } from 'react';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import {
  ApiOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

interface IProps {
  location: any;
  history: any;
}

interface IState {
  selectedKeys: any;
  pathname: string;
}

class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['/dashboard'],
      // 当前页面路径
      pathname: ''
    };
  }

  componentDidMount() {
    const {
      location: { pathname }
    } = this.props;
    this.setState({
      selectedKeys: [pathname],
      pathname
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname != state.pathname) {
      return {
        pathname: props.location.pathname,
        selectedKeys: [props.location.pathname]
      };
    }
    return state;
  }

  render() {
    const { selectedKeys } = this.state;

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
      type?: 'group'
    ): MenuItem {
      return {
        key,
        icon,
        children,
        label,
        type
      } as MenuItem;
    }

    const items: MenuItem[] = [
      getItem('插件中心', '/index', <ApiOutlined />),
      getItem('仪表盘示例', '/dashboard', <PieChartOutlined />),
      getItem('表单示例', '/add/goods', <DesktopOutlined />),
      getItem('404', '/user/error', <ContainerOutlined />)

      // getItem('Navigation One', 'sub1', <MailOutlined />, [
      //   getItem('Option 5', '5'),
      //   getItem('Option 6', '6'),
      //   getItem('Option 7', '7'),
      //   getItem('Option 8', '8'),
      // ]),

      // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      //   getItem('Option 9', '9'),
      //   getItem('Option 10', '10'),

      //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
      // ]),
    ];

    return (
      <Menu
        theme="light"
        mode="inline"
        defaultOpenKeys={['/dashboard']}
        selectedKeys={selectedKeys}
        onClick={({ key }) => {
          this.props.history.push(key);
          this.setState({ selectedKeys: [key] });
        }}
        items={items}
      />
    );
  }
}

export default withRouter(Index);
