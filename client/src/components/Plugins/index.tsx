import React from "react";
import { useKeyboardKey, removeKeyboardKey } from '@/components/Events/listener/index';
import "./index.less";

const EditorDialog: React.FC = () => {
  // useKeyboardKey();
  return (
    <div
      className="editor-dialog isEditing ne-engine ne-typography-classic ne-paragraph-spacing-relax"
      id="editor-dialog"
      suppressContentEditableWarning
      contentEditable="true"
      onFocus={useKeyboardKey}
      onBlur={removeKeyboardKey}
    >
      <ne-div class='ne-div'>
        <ne-p>1234567</ne-p>
      </ne-div>
      <ne-p>
        <ne-text>1234567</ne-text>
      </ne-p>
    </div>
  );
};

export default EditorDialog;
