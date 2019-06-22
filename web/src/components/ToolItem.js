import React from "react";

const ToolItem = props => {
  const { description, title, link, tags } = props.tool;

  return (
    <div key={props.tool.id}>
      <a href={link}>{title}</a>
      {description}
      {tags.map((tag, index) => (
        <tag key={index}>
          <b>#{tag}</b>
        </tag>
      ))}
    </div>
  );
};

export default ToolItem;
