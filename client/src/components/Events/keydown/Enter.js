// Object.defineProperty 点击回车
import * as Tool from '../tool/tool';
import * as Utils from '@/utils/tool';
import $ from "jquery";

export default function (editorStore, event) {
  // editorStore -> 数据中心,在这里修改元数据
  let extentNode = Tool.getExtentNode();

  if (extentNode.selectContext !== 0) {
    // 从操作的实际结果来看,多选内容输入回车之后,光标所在行和上一行都可能会存在dom结构的变更
    // 劫持回车之后的dom结构,之前的selection对象已经不能用了,需要重新实例化selection对象
    setTimeout(() => {
      let extentNode2 = Tool.getExtentNode();
      const next = $(extentNode2.anchorNode);
      const tagName = next.get(0).tagName
      const prev = next.prev();

      console.log('next: ', next);
      console.log('tag: ', tagName);

      if (tagName && (tagName === "NE-P" || tagName.indexOf("NE-H") !== -1)) {
        // 将整行删除完毕
        if (prev && prev.html() === '<br>') {
          const id = prev.attr('id');
          prev.html(`<ne-text id=${Utils.createHash(8)} data-role=${id}><br></ne-text>`)
        }
        if (next.html() === '<br>') {
          const hash = Utils.createHash(8);
          const hash1 = Utils.createHash(8);
          next.attr('id', hash).html(`<ne-text id=${hash1} data-role=${hash}><br></ne-text>`)
          Tool.setCaretPosition(hash1, 0)
        }
      }
      if (!tagName) {
        tagName.css('background', 'red');
        // 处理nex中的id以及data-role属性; prev不需要额外处理
      }
    }, 1);
  } else {
    const currentDom = $(`#${extentNode.id}`);
    const hash1 = Utils.createHash(8);
    const hash2 = Utils.createHash(8);
    if (currentDom.parent().get(0).tagName.indexOf('NE-H') !== -1 && extentNode.anchorNode.length === extentNode.offset && extentNode.isEnd) {
      // 在h标签的行尾输入回车
      event.preventDefault();
      const children = `<ne-p id=${hash1}><ne-text id=${hash2} data-role=${hash1}><br></ne-text></ne-p>`
      $(`#${extentNode.role}`).after(children)
      Tool.setCaretPosition(hash2, 0)
    } else {
      setTimeout(() => {
        if (currentDom.get(0).tagName === 'NE-P') {
          // 这里需要单独判断tagName,可以都用ne-p标签,通过class和attr来控制样式
          currentDom.attr('id', hash1).find('ne-text').attr('data-role', hash1).attr('id', hash2);
        } else {
          currentDom.attr('data-role', hash1).attr('id', hash2).parent().attr('id', hash1);
          // 父级标签类型太多了,暂时使用parent(),可以使用class进行约束
        }
      }, 1);
    }
  }
}
