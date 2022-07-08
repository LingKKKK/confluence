import React, { useState, useEffect, SyntheticEvent } from "react";
import "./index.less";

interface operationItem {
  id: number;
  type: string;
  tag: any;
  desc: string;
  class: string;
  display: boolean;
}

// interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {
//   // 可以剔除一些我们不用的属性
//   altKey: boolean;
//   charCode: number;
//   ctrlKey: boolean;
//   getModifierState(key: string): boolean;
//   key: string;
//   keyCode: number;
//   locale: string;
//   location: number;
//   metaKey: boolean;
//   repeat: boolean;
//   shiftKey: boolean;
//   which: number;
// }

// 断言失败
// let name: string | undefined | null;
// let nus: string | undefined | null;
// console.log(name.trim());
// console.log(nus!.trim());

const EditorDialog: React.FC = () => {
  // const [operationList, setOperationList] = useState(Array<operationItem>());

  useEffect(() => {
    // TODO: 1 截获用户点击事件
    // TODO: 2 获取到点击时光标所在位置
    // TODO: 3 获取到点击时光标所在行的Node信息
    console.log("页面初始化时绑定监听事件");
    const _dialog = document.getElementById("editor-dialog");
    console.log('log::::抓取到的dialog元素', _dialog);
    // console.log(window.event.keyCode);

    window.onkeydown = function (event: KeyboardEvent) {
      // console.log('log::::window -> ', window);
      // console.log('log::::event -> ', event);
      console.log('log::::getSelection -> ', window.getSelection());
    };
  }, []);

  return (
    <div
      className="editor-dialog isEditing"
      id="editor-dialog"
      suppressContentEditableWarning
      contentEditable="true"
    >
      <p className="wtf">222</p>
    </div>
  );
};

export default EditorDialog;
