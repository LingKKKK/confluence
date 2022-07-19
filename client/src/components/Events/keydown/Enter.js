// Object.defineProperty 点击回车
import * as Tool from '../tool/tool';

export default function (editorStore) {
  // editorStore -> 数据中心,在这里修改元数据
  let extentNode = Tool.getExtentNode();
  console.log('extentNode: ', extentNode);
  console.log('editorStore: ', editorStore.list)
  if (editorStore.list) {
    editorStore.list.forEach(item => {
      console.log(item);
    })
  }
}
