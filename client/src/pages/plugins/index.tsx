import React from 'react';
import { Button } from 'antd';
import { useRootStore } from '@mobx/useRootStore';
import { observer } from 'mobx-react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import OperationHeader from '@components/OperationHeader/index';
import './index.less';

function Plugins(props: any) {
  console.log(props);

  return (
    <section className="plugins">
      <OperationHeader />
    </section>
  );
}

export default observer(Plugins);