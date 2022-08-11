import React, { useState, useMemo } from "react";
// 导入 Slate 编辑器的工厂函数。
import { createEditor } from "slate";
// 导入 Slate 组件和 React 插件。
import { Slate, Editable, withReact } from "slate-react";
import "./index.less";

const EditorDialog: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "段落中的一行文本。" }]
    }
  ]);

  // useKeyboardKey();
  return (
    <div className="editor-dialog isEditing">
      <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
        <Editable
          onKeyDown={(event) => {
            if (event.key === "&") {
              // 阻止插入 `&` 字符的默认事件。
              event.preventDefault();
              // 执行insertText方法插入某些文本。
              editor.insertText("and");
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default EditorDialog;
