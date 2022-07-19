/* eslint-disable no-undef */
import React from "react";
// import * as Utils from "@utils/tool";
import "./index.less";
import SelectTitleTag from "./selectTag";

const EditorTitle: React.FC = (props: any) => {
  const domJson: NodeJson = props.data;

  return (
    <SelectTitleTag tag={domJson.tag}>
      <ne-heading-content>
        {domJson.son && domJson.son.map((item: NodeJson) => {
          const attr = item.attr && item.attr.length && item.attr.reduce((cur, key) => {
            cur[`${key}`] = true;
            return cur;
          }, {}) || null;
          return (
            <ne-text
              id={item.id}
              key={item.id}
              {...attr}
            >
              {item.text}
            </ne-text>
          );
        })}
      </ne-heading-content>
    </SelectTitleTag>
  );
};

export default EditorTitle;
