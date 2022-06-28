import React from 'react';
// import { Button } from 'antd';
import { useRootStore } from '@mobx/useRootStore';
import { observer } from 'mobx-react';
// import { Switch } from 'react-router-dom';
// import PrivateRoute from '@components/PrivateRoute';
import { Table } from 'antd';
import './index.less';

function Dashboard() {
  const { dashboardStore } = useRootStore();
  console.log('dashboardStore: ', dashboardStore);
  React.useEffect(() => {
    dashboardStore.getTable();
    console.log('useEffect - dashboardStore: ', dashboardStore);
  }, []);

  // const RouteWithSubRoutes = route => <PrivateRoute path={route.path} component={route.component} routes={route.routes} />;

  // const routeConfig = this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
  return (
    <section className="dashboard">
      <OrderTable list={dashboardStore.list} isLoading={dashboardStore.isLoading.get('getTable')} />
      {/* <Button onClick={() => this.props.history.push('/dashboard/bus')}>二级路由</Button> */}
      {/* <Switch>
                {routeConfig}
            </Switch> */}
    </section>
  );
}

export default observer(Dashboard);

// 表格列配置
const columns = [
  {
    title: 'Title1',
    dataIndex: 'aaaaa'
  },
  {
    title: 'Title2',
    dataIndex: 'bbbbb'
  },
  {
    title: 'Title3',
    dataIndex: 'ccccc'
  },
  {
    title: 'Title4',
    dataIndex: 'ddddd'
  },
  {
    title: 'Title5',
    dataIndex: 'eeeeee'
  },
  {
    title: 'Title6',
    dataIndex: 'ffffff'
  }
];

// 订单表格
function OrderTable({ list, isLoading }) {
  return <Table columns={columns} dataSource={list || []} loading={isLoading} rowKey="aaaaa" />;
}
