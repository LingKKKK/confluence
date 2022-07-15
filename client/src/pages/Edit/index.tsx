import React from "react";
// import { useRootStore } from '@mobx/useRootStore'; // mobx → store
import { observer } from "mobx-react";
import OperationDialog from "@components/OperationDialog/index";
import Editor from "@components/Plugins/index";
import "./index.less";

interface IProps {
  type: string;
}

const Edit: React.FC<IProps> = (props) => {

  return (
    <section className="index">
      <>
        <OperationDialog type='edit' />
      </>
      {/* 主视图区 */}
      <div className="container-dialog">
        {/* 文档标题区域 */}
        <div className="document-info">
          <div className="title">devOps 流程相关</div>
        </div>
        {/* 考虑从哪获取数据? 在外层传入还是在内存获取渲染? */}
        <Editor />
      </div>
    </section>
  );
};

export default observer(Edit);
