import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { searchField, requestTools } from "./store/actions";

import ToolList from "./components/ToolList";

import "./App.css";
import SearchField from "./components/SearchField";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = state => {
  return {
    tools: state.requestTools.tools,
    isPending: state.requestTools.isPending
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = dispatch => {
  return {
    onRequestTools: () => dispatch(requestTools())
  };
};

class App extends Component {
  async componentDidMount() {
    this.props.onRequestTools();
  }

  render() {
    const { tools, onSearchChange, isPending } = this.props;
    return (
      <div className="App">
        <h1>VUTTR</h1>
        <SearchField />
        {isPending ? <h1>Loading</h1> : <ToolList tools={tools} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
