import React, { useCallback, useMemo, useState, useRef } from "react";
import { Editable, withReact, useSlate, Slate, useSelected, useFocused } from "slate-react";
// import { createEditor, Transforms, Text, Editor } from "slate";
import merge from "merge-deep";
import classnames from "classnames";

import Editor from './editor';
console.log('Editor: ', Editor);

import "./index.less";
import "./css/slate-editor.less";

const SlateEditor = React.memo(() => {
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'abc' }]
    }
  ]);
  const onChange = useCallback(function (val) {
    console.log('onChange', val);
    setValue(val);
  });

  return (
    <div
      className="editor-dialog isEditing"
      id="editor-dialog"
      suppressContentEditableWarning
    >
      <Editor value={value} onChange={onChange} />
    </div>
  );
});

export default SlateEditor;
