import React from "react";

const ToolContext = React.createContext({
  tools: [],
  searchTag: "",
  searchOnlyTags: "",
  modalAddIsOpen: false,
  modalRemoveIsOpen: false,
  removingTool: {},
  changeSearchTag: tag => {},
  changeSearchOnlyTags: only_tag => {},
  searchTools: (onlyTag, tag) => {},
  openAddModal: () => {},
  closeAddModal: () => {},
  addTool: tool => {},
  openRemoveModal: tool => {},
  closeRemoveModal: () => {},
  removeTool: () => {}
});

export default ToolContext;
