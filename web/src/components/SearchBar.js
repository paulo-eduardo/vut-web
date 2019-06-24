import React, { Component } from "react";

import ToolContext from "../store/ToolContext";

import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    tag: "",
    only_tag: false
  };

  render() {
    return (
      <ToolContext.Consumer>
        {({ changeSearchTag, changeSearchOnlyTags, searchOnlyTags }) => (
          <section id="search-bar">
            <input
              className="tag"
              type="text"
              placeholder="search"
              onChange={e => changeSearchTag(e.target.value)}
            />
            <input
              id="only_tag"
              className="only_tag"
              type="checkbox"
              onChange={() => changeSearchOnlyTags(!searchOnlyTags)}
            />
            <label for="only_tag">search in tags only</label>
          </section>
        )}
      </ToolContext.Consumer>
    );
  }
}
