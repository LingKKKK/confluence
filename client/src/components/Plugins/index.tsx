/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useKeyboardKey, removeKeyboardKey } from "@/components/Events/listener/index";
import { observer } from "mobx-react";
import { useRootStore } from "@mobx/useRootStore";
// import * as Utils from "@utils/tool";
import "./index.less";
import EditorText from "./Text/index";
import EditorTitle from "./Title/index";

const EditorDialog: React.FC = () => {
  const { editorStore } = useRootStore();

  editorStore.getFileData();

  const aa = () => {
    editorStore.increment();
  };

  const bb = () => {
    editorStore.decrement();
  };

  return (
    <>
      {editorStore.count}
      <button onClick={aa}>+++</button>
      <button onClick={bb}>---</button>
      <div
        className="editor-dialog isEditing ne-engine ne-typography-classic ne-paragraph-spacing-relax"
        id="editor-dialog"
        suppressContentEditableWarning
        contentEditable="true"
        onFocus={() => {
          useKeyboardKey(editorStore)
        }}
        onBlur={removeKeyboardKey}
      >
        {editorStore.list && editorStore.list.map((item: NodeJson) => {
            if (item.type === "h") {
              return <EditorTitle key={item.id} data={item} />;
            }
            if (item.type === "p") {
              return <EditorText key={item.id} data={item} />;
            }
          })}
      </div>
    </>
  );
};

export default observer(EditorDialog);
