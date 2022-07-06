import React from 'react';
import { Button } from 'antd';
import { useRootStore } from '@mobx/useRootStore';
import { observer } from 'mobx-react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import OperationDialog from '@components/OperationDialog/index';
import './index.less';

function Index(props: any) {
  console.log(props);

  const creator = '岳鹏飞';
  const latestModifyTime = '十二月 16, 2021';

  return (
    <section className="index">
      <>
        <OperationDialog />
      </>
      {/* 主视图区 */}
      <div className='container-dialog'>
        {/* 文档标题区域 */}
        <div className='document-info'>
          <div className='title'>devOps 流程相关</div>
          <div className='version'>
            由<i>{creator}</i>创建, 最后修改于<i>{latestModifyTime}</i>
          </div>
        </div>
        {/* 展示/编辑区 */}
        11111

        {/* 点赞/标签/评论 */}
      </div>
    </section>
  );
}

export default observer(Index);
