import React from "react";
import { useKeyboardKey, removeKeyboardKey } from '@/components/Events/listener/index';
import "./index.less";

const EditorDialog: React.FC = () => {
  // useKeyboardKey();
  return (
    <div
      className="editor-dialog isEditing"
      id="editor-dialog"
      suppressContentEditableWarning
      contentEditable="true"
      onFocus={useKeyboardKey}
      onBlur={removeKeyboardKey}
    >
      <ne-div>
        <ne-p>123</ne-p>
      </ne-div>
    </div>
  );
};

export default EditorDialog;
