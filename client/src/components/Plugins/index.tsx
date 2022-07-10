import React, { useState, useEffect, SyntheticEvent } from "react";
import KeyboardListener from "jj-keyboard";
import $ from "jquery";
import "./index.less";

console.log($);
interface operationItem {
  id: number;
  type: string;
  tag: any;
  desc: string;
  class: string;
  display: boolean;
}

function dom2json(ele) {
  function domJson(dom) {
    const obj = {
      tag: getTagName(dom)
    };
    if (dom.nodeType == 1) {
      const attrs = getTagAttrs(dom);
      if (attrs) obj.attributes = attrs;
      obj.children = Array.from(dom.childNodes)
        .filter((child) => {
          return !(child.nodeType == 3 && !child.textContent.trim());
        })
        .map((child) => domJson(child));
      return obj;
    }
    if (dom.nodeType == 3) {
      obj.content = texthandle(dom.textContent);
      return obj;
    }
  }
  function texthandle(str) {
    return str.replace(/\s/g, "");
  }
  function getTagName(dom) {
    return dom.nodeName.toLocaleLowerCase().replace("#", "");
  }
  function getTagAttrs(dom) {
    const attr = Array.from(dom.attributes);
    const obj = {};
    attr.forEach((atr) => (obj[atr.name] = atr.value));
    return attr.length ? obj : null;
  }
  return domJson(ele);
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
  KeyboardListener.isConsole = false; // boolean -> 打印输入信息,可以在各浏览器进行测试

  KeyboardListener.catch("Enter", (value) => {
    value.preventDefault();
    // const _dialog = document.getElementById("editor-dialog"); // 获取到指定标签
    // const positionObj = window.getSelection();
    // console.log(positionObj);
    if (window.getSelection) {
      // console.log(window.getSelection());
      // console.log(window.getSelection().getRangeAt(0));
      const _selection = window.getSelection();
      // const _range = _selection!.getRangeAt(0);
      // console.log(_selection!.extentNode!.parentElement.attributes);
      // extentNode

      // TODO 1: 给当前DOM标记一下,等会需要修改内容
      const target = _selection!.extentNode!.parentElement;
      $(target).attr("id", "target");
      // console.log('target: ', $('#target'))
      // let _parent = $("#target").parents(".test_p");
      // console.log(_parent.html());
      // let eleArr = _parent.innerHTML.split(' id=\"target\">');
      // console.log('_parent: ', _parent)
      // console.log('eleArr: ', eleArr)
      // 0: "111aaaa<b class=\"bbb\">bbbb<i class=\"iii\" id=\"i1\" "
      // 删除内容
      // 1: ">cccc</i></b>dddd"
      // 保留内容
      // TODO: 使用什么方法来实现清除逻辑?
      let _parent = $("#target").parents(".test_p");
      let _dom = dom2json(_parent[0]);
      console.log('获取到当前DOM结构 >> ', _dom);

      // let selection = window.getSelection(),
      //   range = selection.getRangeAt(0),
      //   br = document.createElement("br");
      // console.log("log::::range -> ", selection, range, br);
      // console.log(value);
      // range.deleteContents();
      // range.insertNode(br);
      // range.setStartAfter(br);
      // range.setEndAfter(br);
      // selection.removeAllRanges();
      // selection.addRange(range);
      // return false;
    }
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
    // const _dialog = document.getElementById("editor-dialog");
    // console.log("log::::抓取到的dialog元素", _dialog);

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
        111aaaa
        <b className="bbb" id="adwd">
          bbbb
          <i className="iii" id="i1">
            cccc
          </i>
        </b>
        dddd
      </p>
      <p className="test_p">
        222aaaa
        <b className="bbb">
          bbbb
          <i className="iii" id="i2">
            cccc
          </i>
        </b>
        dddd
      </p>
      <p className="test_p">
        333aaaa
        <b className="bbb">
          bbbb
          <i className="iii" id="i3">
            cccc
          </i>
        </b>
        dddd
      </p>
      <p className="test_p">
        444aaaa
        <b className="bbb">
          bbbb
          <i className="iii" id="i4">
            cccc
          </i>
        </b>
        dddd
      </p>
    </div>
  );
};

export default EditorDialog;
