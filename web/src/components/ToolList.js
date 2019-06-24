import React from "react";
import ToolItem from "./ToolItem";

import ToolContext from "../store/ToolContext";

import "./ToolList.css";

const ToolList = props => {
  return (
    <div class="toolList">
      <ToolContext.Consumer>
        {({ tools }) =>
          tools.map(tool => <ToolItem key={tool.id} tool={tool} />)
        }
      </ToolContext.Consumer>
    </div>
  );
};

export default ToolList;
