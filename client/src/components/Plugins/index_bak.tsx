/* eslint-disable no-use-before-define */
import React, { useState, useEffect, SyntheticEvent } from "react";
import KeyboardListener from "jj-keyboard";
import $ from "jquery";
import "./index.less";

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
// console.log(name!.trim());
// nus = "123";
// console.log(nus.trim());

const EditorDialog: React.FC = () => {
  const [refresh, setRefresh] = useState(0);

  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
  KeyboardListener.init();
  KeyboardListener.isConsole = false; // boolean -> 打印输入信息,可以在各浏览器进行测试

  function setSelectionRange(element, position) {
    if (element.setSelectionRange) {
      element.focus();
      element.setSelectionRange(position, position);
    } else if (element.createTextRange) {
      var range = element.createTextRange();
      range.collapse(true);
      range.moveEnd("character", position);
      range.moveStart("character", position);
      range.select();
    }
  }

  KeyboardListener.catch("Enter", (value) => {
    value.preventDefault();
    // const _dialog = document.getElementById("editor-dialog"); // 获取到指定标签
    // const positionObj = window.getSelection();
    // console.log(positionObj);
    // console.log(window.getSelection());
    // console.log(window.getSelection().getRangeAt(0));
    // const _selection = window.getSelection();
    // const _range = _selection!.getRangeAt(0);
    // console.log(_selection!.extentNode!.parentElement.attributes);
    // extentNode

    // TODO 1: 给当前DOM标记一下,等会需要修改内容 ✔️
    // const target = _selection!.extentNode!.parentElement;
    // $(target).attr("id", "target");
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

    // TODO2: 如何设置光标的位置? Enter/ShiftEnter/粘贴的时候,都会涉及到光标定位的问题

    //定位div(contenteditable = "true")，上传图片后，光标移到输入框后面
    // function po_Last_Div(obj) {
    //   if (window.getSelection) {
    //     //ie11 10 9 ff safari
    //     obj.focus(); //解决ff不获取焦点无法定位问题
    //     var range = window.getSelection(); //创建range
    //     range.selectAllChildren(obj); //range 选择obj下所有子内容
    //     range.collapseToEnd(); //光标移至最后
    //   } else if (document.selection) {
    //     //ie10 9 8 7 6 5
    //     var range = document.selection.createRange(); //创建选择对象
    //     //var range = document.body.createTextRange();
    //     range.moveToElementText(obj); //range定位到obj
    //     range.collapse(false); //光标移至最后
    //     range.select();
    //   }
    // }

    // TODO: 设置光标位置 ✔️
    // var p = document.getElementById("i1");
    // var s = window.getSelection();
    // var r = document.createRange();
    // r.setStart(p, 0);
    // r.setEnd(p, 0);
    // s.removeAllRanges();
    // s.addRange(r);

    // TODO3: 使用什么方法来实现清除逻辑?
    // let _parent = $("#target").parents(".test_p");
    // let _dom = dom2json(_parent[0]);
    // console.log('获取到当前DOM结构 >> ', _dom);

    // 添加br标签
    // let selection = window.getSelection(),
    //   range = selection.getRangeAt(0),
    //   br = document.createElement("br");
    // console.log("log::::range -> ", selection, range, br);
    // range.deleteContents();
    // range.insertNode(br);
    // range.setStartAfter(br);
    // range.setEndAfter(br);
    // selection.removeAllRanges();
    // selection.addRange(range);
    // document.getElementById("editor-dialog").appendChild(br);
    // document.execCommand('ForeColor',false,'#BBDDCC');
    // document.execCommand('CreateLink',true,'true');
    // document.execCommand('formatBlock',true,'p');

    // TODO: 需要想一下,使用修改JSON对象,还是正则替换的方式?
    // DOM对象 <-> JSON对象  类似低代码平台的方案,灵活容易实现
    // 正则表达式匹配, 不需要太多的计算和逻辑, 效率更高

    return false;
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
    // window.onkeydown = function (event: KeyboardEvent) {
    //   console.log()
    //   // console.log('log::::window -> ', window);
    //   // console.log('log::::event -> ', event);
    //   let selection = window.getSelection(),
    //     range = selection!.getRangeAt(0),
    //     br = document.createElement("br");
    //   console.log("log::::range -> ", selection, range, br);
    //   range!.deleteContents();
    //   range!.insertNode(br);
    //   range!.setStartAfter(br);
    //   range!.setEndAfter(br);
    //   selection!.removeAllRanges();
    //   selection!.addRange(range);
    // };
  }, [refresh]);

  const setPost = () => {
    setSelectionRange($("#input"), 0);
  };

  return (
    <div
      className="editor-dialog isEditing"
      id="editor-dialog"
      suppressContentEditableWarning
      contentEditable="true"
    >
      <p className="test_p">
        <ne-p>123</ne-p>
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
      <input type="text" id="input" defaultValue="123123" />
      <button id="setPos" onClick={setPost}>
        set Pos
      </button>
    </div>
  );
};

export default EditorDialog;
