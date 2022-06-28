# 示例

按需引入配置

```json .prettierrc.js
  module.exports = {
    // ⾏尾需要有分号
    semi: true,
    // 使⽤单引号
    singleQuote: true,
    // 对象的 key 仅在必要时⽤引号
    quoteProps: 'as-needed',
    // jsx 不使⽤单引号，⽽使⽤双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号
    trailingComma: 'none',
    // ⼤括号内的⾸尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换⾏
    jsxBracketSameLine: false,
    // 每个⽂件格式化的范围是⽂件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写⽂件开头的 @prettier
    requirePragma: false,
    // 不需要⾃动在⽂件开头插⼊ @prettier
    insertPragma: false,
    // 使⽤默认的折⾏标准
    // proseWrap: 'preserve',
    // 根据显⽰样式决定 html 要不要折⾏
    htmlWhitespaceSensitivity: 'css',
    // 换⾏符使⽤ lf
    endOfLine: 'lf',
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: 'always',
    // tab缩进大小,默认为2
    tabWidth: 2,
    // 使用tab缩进还是空格，默认false
    useTabs: false,
    // vue缩进脚本和样式
    vueIndentScriptAndStyle: false
    // > 标签放在最后一行的末尾，而不是单独放在下一行 默认false
  };
```
