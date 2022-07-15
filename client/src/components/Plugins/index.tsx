import React from "react";
import { useKeyboardKey } from "@/components/Events/listener/index";
import "./index.less";

const EditorDialog: React.FC = () => {
  const onKeyDownCallback = (e: KeyboardEvent) => {
    console.log(e);
    e.preventDefault;
  };

  const { keyInfo } = useKeyboardKey(onKeyDownCallback);

  return (
    <div>
      {keyInfo.code}
    </div>
  );
};

export default EditorDialog;
