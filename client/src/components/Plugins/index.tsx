import React, { useState, useEffect, SyntheticEvent } from "react";
import KeyboardListener from "jj-keyboard";
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
  const [refresh, setRefresh] = useState(0);

  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
  KeyboardListener.init();
  KeyboardListener.isConsole = true; // boolean -> 打印输入信息,可以在各浏览器进行测试

  KeyboardListener.catch("Enter", (value) => {
    value.preventDefault();
    // const _dialog = document.getElementById("editor-dialog"); // 获取到指定标签
    const positionObj = window.getSelection();
    console.log(positionObj);
  });
  KeyboardListener.catch("Meta+V", (value) => {
    value.preventDefault();
  });
  // KeyboardListener.catch("Shift+Enter", (value) => {
  //   value.preventDefault();
  // });

  // 兼容性、按键Bug
  KeyboardListener.catch("V+Meta", (value) => {
    value.preventDefault();
  });

  useEffect(() => {
    console.log(refresh);
    // TODO: 1 截获用户点击事件
    // TODO: 2 获取到点击时光标所在位置
    // TODO: 3 获取到点击时光标所在行的Node信息
    const _dialog = document.getElementById("editor-dialog");
    console.log("log::::抓取到的dialog元素", _dialog);

    // 键盘事件
    /**
     * event.preventDefault() -> 对点击事件做拦截,不触发默认的操作
     * 需要注意拦截的内容
     */
  }, [refresh]);

  return (
    <div
      className="editor-dialog isEditing"
      id="editor-dialog"
      suppressContentEditableWarning
      contentEditable="true"
    >
      <p className="test_p">
        111aaaa<b>bbbb<i>cccc</i></b>dddd
      </p>
      <p className="test_p">
        222aaaa<b>bbbb<i>cccc</i></b>dddd
      </p>
      <p className="test_p">
        333aaaa<b>bbbb<i>cccc</i></b>dddd
      </p>
      <p className="test_p">
        444aaaa<b>bbbb<i>cccc</i></b>dddd
      </p>
    </div>
  );
};

export default EditorDialog;
