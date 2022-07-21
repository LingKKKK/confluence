import { EditorStore } from "@/mobx/editor/type";

/**
 * @dom2json
 * @params ele:需要处理的dom对象
 * @return json格式的数据
 * @description 将dom信息平铺成json格式数据
 */
export const dom2json = (ele) => {
  console.log(ele);
};

/**
 * @json2dom
 * @params json:需要写入dom的json数据
 * @return Node节点类型的字符串
 * @description 将json转成dom字符串,可以通过innerHtml等方式写入DOM
 */
export const json2dom = (json) => {
  console.log(json);
};

/**
 * @createNewDom
 * @params target:目标元素
 * @return Array<targetDOM, newDOM>
 * @description 在目标节点的最外层父级后,添加一个空节点;
 * @todo 输入回车之后,以当前光标所在位置做内容划分,对返回的两个DOM进行插入
 */
export const createNewDom = (target) => {
  console.log(target);
};

/**
 * @getExtentNode 获取当前光标所在节点的所有信息
 * @params {}
 * @return Object<extentNode>
 * @description 不需要传入任何参数;可获取到对应的Node节点信息,并给该节点添加标记: eg. `id='target' | data-target='true'`
 */
export const getExtentNode = () => {
  const selection: Selection | null = window.getSelection(); // 实例化Selection对象
  const target = selection?.anchorNode?.parentElement; // 获取到光标所在的目标对象
  const isEnd = !!!target?.nextSibling
  return {
    id: target?.id,
    role: target?.dataset.role,
    offset: selection?.getRangeAt(0).startOffset,
    selectContext: selection?.toString().length,
    anchorNode: selection?.anchorNode,
    isEnd,
    selection: selection
  };
};

/**
 * @addNewLine
 * @params {extentNode:React.ReactNode, editorStore: store}
 * @return void;
 * @description 输入回车添加一行
 */
export const addNewLine = (extentNode: any, editorStore: EditorStore) => {
  console.log("extentNode: ", extentNode);
  // const { list: nodeJson } = editorStore;

  // todo: 是否需要截取光标选中的内容?
  /**
   * 实际的效果是: 删除选中的内容,再插入新的一行
   * 如何获取选中的内容:
   *    anchorNode === extentNode && anchorOffset === extentOffset  光标没有多选,插入新行即可
   *    否则,通过selection的属性,判断哪些dom标签被选中了,需要将其删除并插入新行
   */
  // 不需要, 删除光标选中内容,然后换行即可

  // editorStore.xxx() 调用Mobx中的赋值方法进行赋值运算
};

/**
 * @setCaretPosition
 * @params {textDom: node, pos: number}
 * @description 设置光标的位置,基于dom和offset
 */
export const setCaretPosition = (id, pos) => {
  const el = document.getElementById(id);
  const range = document.createRange();
  const sel = window.getSelection();
  if (el && el.childNodes) {
    range.setStart(el.childNodes[0], pos);
    range.collapse(true);
    sel?.removeAllRanges();
    sel?.addRange(range);
    el?.focus();
  }
};
