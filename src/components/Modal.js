import React, { Component } from "react";
class Modal extends Component {
  render() {
    return (
      <div class="modal">
        <div class="modal-content">
            <span class="modal-close">&times;</span>
          <div class="modal-form">
            <input type="text" placeholder="Add new todo item" />
            <button>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
