import React, { Component } from "react";
import Modal from "react-modal";

import ToolContext from "../store/ToolContext";

import "./AddModal.css";

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
        maxWidth: "600px",
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
              <section id="addmodal">
                <section id="header">
                  <h2>+ Add new tool</h2>
                </section>
                <section id="form">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    type="text"
                    onChange={e =>
                      this.setState(
                        Object.assign({}, this.state, { title: e.target.value })
                      )
                    }
                  />
                  <label htmlFor="link">Link</label>
                  <input
                    id="link"
                    type="text"
                    onChange={e =>
                      this.setState(
                        Object.assign({}, this.state, { link: e.target.value })
                      )
                    }
                  />
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    onChange={e =>
                      this.setState(
                        Object.assign({}, this.state, {
                          description: e.target.value
                        })
                      )
                    }
                  />
                  <label htmlFor="tags">Tags</label>
                  <input
                    id="tags"
                    type="text"
                    onChange={e =>
                      this.setState(
                        Object.assign({}, this.state, {
                          tags: e.target.value.split(" ")
                        })
                      )
                    }
                  />
                  <button onClick={e => addTool(this.state)}>Add</button>
                </section>
              </section>
            </Modal>
          )}
        </ToolContext.Consumer>
      </div>
    );
  }
}
