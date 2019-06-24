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

  removeTool = async () => {
    await api.delete(`/tools/${this.state.removingTool.id}`);
    this.closeRemoveModal();
  };

  addTool = async tool => {
    await api.post("/tools", tool);
    // .then(response => {
    //   debugger;
    //   Object.assign({}, this.state, {
    //     tools: [...this.state.tools, response.data]
    //   });
    // });
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
