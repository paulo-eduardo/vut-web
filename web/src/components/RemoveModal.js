import React from "react";
import Modal from "react-modal";

import ToolContext from "../store/ToolContext";

import "./RemoveModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "500px",
    width: "100%",
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
          <section id="removeModal">
            <section id="header">
              <b>x</b>
              <h1>Remove tool</h1>
            </section>
            <section id="content">
              <p>
                Are you sure you want to remove <b>{removingTool.title}</b>
              </p>
            </section>
            <section id="footer">
              <button class="cancel" onClick={closeRemoveModal}>
                Cancel
              </button>
              <button class="submit" onClick={removeTool}>
                Yes, Remove
              </button>
            </section>
          </section>
        </Modal>
      )}
    </ToolContext.Consumer>
  );
};

export default RemoveModal;
