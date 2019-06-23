import React from "react";

import ToolContext from "../store/ToolContext";

const ToolItem = props => {
  const { title, description, tags } = props.tool;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{tags ? tags.map(tag => <b key={tag}>#{tag} </b>) : ""}</p>
      <ToolContext.Consumer>
        {({ openRemoveModal }) => (
          <button onClick={() => openRemoveModal(props.tool)}>- Remove</button>
        )}
      </ToolContext.Consumer>
    </>
  );
};

export default ToolItem;
