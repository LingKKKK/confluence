/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useKeyboardKey, removeKeyboardKey } from "@/components/Events/listener/index";
import { observer } from "mobx-react";
import { useRootStore } from "@mobx/useRootStore";
// import * as Utils from "@utils/tool";
import "./index.less";
import EditorText from "./Text/index";
import EditorTitle from "./Title/index";

// function EditorDialog(props: any) {
//   console.log("EditorDialog-props: ", props);
const EditorDialog: React.FC = (props: any) => {
  console.log("EditorDialog-props: ", props);
  const { editorStore } = useRootStore();
  // editorStore.getFileData();
  React.useEffect(() => {
    editorStore.getFileData();
  }, []);

  // const aa = () => {
  //   editorStore.increment();
  // };
  // const bb = () => {
  //   editorStore.decrement();
  // };
  // console.log('获取到的文件nodeJson内容 >>> ', JSON.stringify(editorStore.list))
  // {editorStore.count}
  // <button onClick={aa}>+++</button>
  // <button onClick={bb}>---</button>

  return (
    <>
      <div
        className="editor-dialog isEditing ne-engine ne-typography-classic ne-paragraph-spacing-relax"
        id="editor-dialog"
        suppressContentEditableWarning
        contentEditable="true"
        onFocus={() => {
          useKeyboardKey(editorStore);
        }}
        onBlur={removeKeyboardKey}
      >
        {editorStore.list &&
          editorStore.list.map((item: NodeJson, index: number) => {
            if (item.type === "h") {
              return <EditorTitle key={item.id} data={item} index={index} />;
            }
            if (item.type === "p") {
              return <EditorText key={item.id} data={item} index={index}/>;
            }
          })}
      </div>
    </>
  );
};

export default observer(EditorDialog);
