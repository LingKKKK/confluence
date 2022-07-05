import React from 'react';
import { Button } from 'antd';
import { useRootStore } from '@mobx/useRootStore';
import { observer } from 'mobx-react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import OperationDialog from '@components/OperationDialog/index';
import './index.less';

function Plugins(props: any) {
  console.log(props);

  return (
    <section className="plugins">
      <>
        <OperationDialog />
      </>
      1111
    </section>
  );
}

export default observer(Plugins);
