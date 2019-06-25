import React, { Component } from "react";

import api from "./api";

import "./App.css";

import ToolList from "./components/ToolList";
import SearchBar from "./components/SearchBar";
import AddModal from "./components/AddModal";
import RemoveModal from "./components/RemoveModal";

import ToolContext from "./store/ToolContext";

export default class App extends Component {
  state = {
    tools: [],
    searchTag: "",
    searchOnlyTags: false,
    modalAddIsOpen: false,
    modalRemoveIsOpen: false,
    removingTool: {}
  };

  componentDidMount() {
    api.get("tools").then(response => {
      this.setState(Object.assign({}, this.state, { tools: response.data }));
    });
  }

  searchTools = (onlyTags, tag) => {
    let url = "tools";
    url += (onlyTags ? "?tags_like=" : "?q=") + tag;

    api.get(url).then(response => {
      this.setState(Object.assign({}, this.state, { tools: response.data }));
    });
  };

  changeSearchTag = tag => {
    this.setState(Object.assign({}, this.state, { searchTag: tag }));
    this.searchTools(this.state.searchOnlyTags, tag);
  };
  changeSearchOnlyTags = only_tag => {
    this.setState(Object.assign({}, this.state, { searchOnlyTags: only_tag }));
    this.searchTools(only_tag, this.state.searchTag);
  };

  openAddModal = () => {
    this.setState({ modalAddIsOpen: true });
  };

  closeAddModal = () => {
    this.setState({ modalAddIsOpen: false });
  };

  openRemoveModal = tool => {
    this.setState({ modalRemoveIsOpen: true, removingTool: tool });
  };

  closeRemoveModal = () => {
    this.setState({ modalRemoveIsOpen: false, removingTool: {} });
  };

  removeTool = () => {
    let toolId = this.state.removingTool.id;
    api.delete(`/tools/${toolId}`).then(() => {
      var array = [...this.state.tools]; // make a separate copy of the array
      var index = array.findIndex(x => x.id === toolId);
      if (index > -1) {
        array.splice(index, 1);
        this.setState({ tools: array });
      }
    });
    this.closeRemoveModal();
  };

  addTool = tool => {
    api.post("/tools", tool).then(response => {
      this.setState({ tools: [...this.state.tools, response.data] });
      this.closeAddModal();
    });
  };

  render() {
    const {
      searchTools,
      changeSearchTag,
      changeSearchOnlyTags,
      openAddModal,
      closeAddModal,
      addTool,
      openRemoveModal,
      closeRemoveModal,
      removeTool
    } = this;

    const value = {
      ...this.state,
      searchTools,
      changeSearchTag,
      changeSearchOnlyTags,
      openAddModal,
      closeAddModal,
      addTool,
      openRemoveModal,
      closeRemoveModal,
      removeTool
    };
    return (
      <ToolContext.Provider value={value}>
        <section id="main-page">
          <header>
            <h1> VUTTR </h1>
            <h2>Very Useful Tools to Remember</h2>
          </header>
          <section id="search">
            <SearchBar />
            <button onClick={openAddModal}>+ Add</button>
          </section>
          <ToolList />
          <AddModal />
          <RemoveModal />
        </section>
      </ToolContext.Provider>
    );
  }
}
