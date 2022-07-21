/* eslint-disable no-undef */
import React from "react";
// import * as Utils from "@utils/tool";
import "./index.less";
import SelectTitleTag from "./selectTag";

const EditorTitle: React.FC = (props: any) => {
  const { data: domJson, index: level1 } = props;

  return (
    <SelectTitleTag tag={domJson.tag} id={domJson.id}>
      {domJson.son &&
        domJson.son.map((item: NodeJson, index) => {
          const attr =
            (item.attr &&
              item.attr.length &&
              item.attr.reduce((cur, key) => {
                cur[`${key}`] = true;
                return cur;
              }, {})) ||
            null;
          return (
            <ne-text id={item.id} key={item.id} data-role={domJson.id} {...attr}>
              {item.text}
            </ne-text>
          );
        })}
    </SelectTitleTag>
  );
};

export default EditorTitle;
