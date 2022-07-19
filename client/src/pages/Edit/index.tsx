import React, { lazy } from "react";
// import { useRootStore } from '@mobx/useRootStore'; // mobx → store
import { observer } from "mobx-react";
import OperationDialog from "@components/OperationDialog/index";
import Editor from "@components/Plugins/index";
// const Editor = lazy(() => import(/* webpackChunkName: "Editor"*/ '@components/Plugins/index'));

import "./index.less";

interface IProps {
  type: string;
}

const Edit: React.FC<IProps> = (props) => {
  console.log('渲染Edit组件 >>> ');

  return (
    <section className="index">
      <OperationDialog type='edit' />
      <div className="container-dialog">
        <div className="document-info">
          <div className="title">devOps 流程相关</div>
        </div>
        <Editor />
      </div>
    </section>
  );
};

export default observer(Edit);
