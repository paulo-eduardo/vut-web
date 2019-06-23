import React from "react";
import ToolItem from "./ToolItem";

import ToolContext from "../store/ToolContext";

const ToolList = props => {
  return (
    <ToolContext.Consumer>
      {({ tools }) => tools.map(tool => <ToolItem key={tool.id} tool={tool} />)}
    </ToolContext.Consumer>
  );
};

export default ToolList;
