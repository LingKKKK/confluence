/* eslint-disable no-undef */
import React from "react";

const EditorText: React.FC = (props:any) => {
  const domJson: NodeJson = props.data;

  return (
    <ne-p id={domJson.id}>
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
    </ne-p>
  );
};

export default EditorText;
