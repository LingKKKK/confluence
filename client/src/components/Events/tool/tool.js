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
 * @todo1 获取节点信息
 * @todo2 获取光标偏移量
 * @todo3 给节点添加标记,方便后续的分割操作
 */
export const getExtentNode = () => {
  const selection = window.getSelection();
  console.log(11, selection);

  const target = selection.extentNode.parentElement;
  console.log('target: ', target);

  // $(target).attr("id", "target");
  // console.log('target: ', $('#target'))
  // let _parent = $("#target").parents(".test_p");
  // console.log(_parent.html());

  let extentNodeInfo = {
    offset: window.getSelection().getRangeAt(0).startOffset
  };
  console.log("extentNodeInfo: ", extentNodeInfo);
  // const _selection = window.getSelection();
  // const _range = _selection.getRangeAt(0);
  // console.log(_selection.extentNode.parentElement.attributes);
  // console.log(_range);
};
