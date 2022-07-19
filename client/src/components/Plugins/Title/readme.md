# 编辑器文本类元素 dom 结构层级说明

```html
<ne-h3 id="Jv4Xt" ne-role="render-unit">
  <ne-heading-content>
    <ne-text ne-strikethrough="true" id="u9ca7de8c">1231</ne-text>
    <ne-text ne-underline="true" ne-strikethrough="true" id="u8ba89ab7">3</ne-text>
    <ne-text ne-underline="true" id="u5f0e027b">2</ne-text>
    <ne-text
      ne-underline="true"
      ne-strikethrough="true"
      id="u8a46340d"
      style="color: rgb(232, 50, 60);"
      >1</ne-text
    >
    <ne-text ne-underline="true" ne-strikethrough="true" id="u6276bb63">2</ne-text>
    <ne-text ne-strikethrough="true" id="ubb00cd91">3</ne-text>
    <span class="ne-b-filler"><br /></span>
  </ne-heading-content>
</ne-h3>
```

`ne-b-filler`为输入提示,可以暂时不添加;可 slot 一样,由内容时不出现

```js
// 定义什么样的结构才能同时满足各类样式呢?
/**
 * @nodeJson
 * @id 每一个节点的编号
 * @tag 标签的类型
 * @attr 文本样式,写入时就严格按照顺序写入
 * @text 文本内容
 * @son 字内容
 */
let nodeJson = {
  id: "rqweyrty",
  tag: "ne-h3",
  son: [
    {
      id: "erthert",
      tag: "ne-text",
      attr: ['ne-strikethrough', 'ne-underline', 'ne-color-49', 'ne-fontsize-13'],
      text: 'aaaa'
    }, {
      id: "fndhgdf",
      tag: "ne-text",
      attr: ['ne-strikethrough', 'ne-color-30', 'ne-fontsize-14'],
      text: 'bbbb'
    }, {
      id: "xcsdg634f",
      tag: "ne-text",
      attr: ['ne-color-30', 'ne-fontsize-12'],
      text: 'ccccc'
    }
  ]
};
```
