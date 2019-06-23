import React, { Component } from "react";

import ToolContext from "../store/ToolContext";

export default class SeachBar extends Component {
  state = {
    tag: "",
    only_tag: false
  };

  render() {
    return (
      <ToolContext.Consumer>
        {({ changeSearchTag, changeSearchOnlyTags, searchOnlyTags }) => (
          <>
            <input
              type="text"
              onChange={e => changeSearchTag(e.target.value)}
            />
            <input
              type="checkbox"
              onChange={() => changeSearchOnlyTags(!searchOnlyTags)}
            />
          </>
        )}
      </ToolContext.Consumer>
    );
  }
}
