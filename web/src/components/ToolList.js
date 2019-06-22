import React from "react";
import ToolItem from "./ToolItem";

const ToolList = props => {
  const { tools } = props;
  return (
    <>
      {tools.map(tool => (
        <ToolItem tool={tool} />
      ))}
    </>
  );
};

export default ToolList;
