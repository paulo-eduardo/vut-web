import React from "react";

import ToolContext from "../store/ToolContext";

import "./ToolItem.css";

const ToolItem = props => {
  const { link, title, description, tags } = props.tool;
  return (
    <section id="toolItem">
      <section id="headerTool">
        <a href={link}>{title}</a>
        <ToolContext.Consumer>
          {({ openRemoveModal }) => (
            <button onClick={() => openRemoveModal(props.tool)}>
              - Remove
            </button>
          )}
        </ToolContext.Consumer>
      </section>
      <section id="contentTool">
        <p>{description}</p>
        <p>{tags ? tags.map(tag => <b key={tag}>#{tag} </b>) : ""}</p>
      </section>
    </section>
  );
};

export default ToolItem;
