import React, { Component } from "react";
import { connect } from "react-redux";
import { searchField } from "../store/actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchField: (tag, only_tags) => dispatch(searchField(tag, only_tags))
  };
};

class SearchField extends Component {
  state = {
    tag: "",
    only_tags: false
  };

  handleTagChanged(value) {
    this.setState({ tag: value });
    this.props.onSearchField(this.state.tag, this.state.only_tags);
  }

  handleCheckChanged(value) {
    this.setState({ only_tags: value });
    this.props.onSearchField(this.state.tag, this.state.only_tags);
  }

  render() {
    return (
      <>
        <input
          type="text"
          onChange={e => this.handleTagChanged(e.target.value)}
        />
        <input
          type="checkbox"
          onChange={() => this.handleCheckChanged(!this.state.only_tags)}
        />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
