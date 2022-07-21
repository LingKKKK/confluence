import React from "react";

const SelectTitleTag: React.FC = (props: any) => {
  return (
    <>
      {props.tag === 'ne-h1' && (<ne-h1 id={props.id}>{props.children}</ne-h1>)}
      {props.tag === 'ne-h2' && (<ne-h2 id={props.id}>{props.children}</ne-h2>)}
      {props.tag === 'ne-h3' && (<ne-h3 id={props.id}>{props.children}</ne-h3>)}
      {props.tag === 'ne-h4' && (<ne-h4 id={props.id}>{props.children}</ne-h4>)}
      {props.tag === 'ne-h5' && (<ne-h5 id={props.id}>{props.children}</ne-h5>)}
      {props.tag === 'ne-h6' && (<ne-h6 id={props.id}>{props.children}</ne-h6>)}
    </>
  );
};

export default SelectTitleTag;
