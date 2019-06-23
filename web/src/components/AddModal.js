import React, { Component } from "react";
import Modal from "react-modal";

import ToolContext from "../store/ToolContext";

export default class AddModal extends Component {
  state = {
    title: "",
    link: "",
    description: "",
    tags: []
  };

  render() {
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

    return (
      <div>
        <ToolContext.Consumer>
          {({ modalAddIsOpen, closeAddModal, addTool }) => (
            <Modal
              isOpen={modalAddIsOpen}
              onRequestClose={closeAddModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>{this.state.title}</h2>
              <button onClick={closeAddModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input
                  type="text"
                  placeholder="title"
                  onChange={e =>
                    this.setState(
                      Object.assign({}, this.state, { title: e.target.value })
                    )
                  }
                />
                <input
                  type="text"
                  placeholder="link"
                  onChange={e =>
                    this.setState(
                      Object.assign({}, this.state, { link: e.target.value })
                    )
                  }
                />
                <input
                  type="text"
                  placeholder="description"
                  onChange={e =>
                    this.setState(
                      Object.assign({}, this.state, {
                        description: e.target.value
                      })
                    )
                  }
                />
                <input
                  type="text"
                  placeholder="tags"
                  onChange={e =>
                    this.setState(
                      Object.assign({}, this.state, {
                        tags: e.target.value.split(" ")
                      })
                    )
                  }
                />
                <button onClick={e => addTool(this.state)}>Add</button>
              </form>
            </Modal>
          )}
        </ToolContext.Consumer>
      </div>
    );
  }
}
