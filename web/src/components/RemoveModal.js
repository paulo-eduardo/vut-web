import React from "react";
import Modal from "react-modal";

import ToolContext from "../store/ToolContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const RemoveModal = () => {
  return (
    <ToolContext.Consumer>
      {({ modalRemoveIsOpen, closeRemoveModal, removeTool, removingTool }) => (
        <Modal
          isOpen={modalRemoveIsOpen}
          onRequestClose={closeRemoveModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1>Remove tool</h1>
          <p>
            Are you sure you want to remove <b>{removingTool.title}</b>
          </p>
          <button onClick={closeRemoveModal}>Cancel</button>
          <button onClick={removeTool}>Yes, Remove</button>
        </Modal>
      )}
    </ToolContext.Consumer>
  );
};

export default RemoveModal;
