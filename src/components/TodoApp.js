import React, { Component } from "react";
import bg from "../img/bg.svg";
import iconAdd from "../img/icon-add.svg";
import classNames from "classnames";
// import Modal from "./Modal";

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
    };

    this.updateNewItem = this.updateNewItem.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  updateNewItem(e) {
    this.setState({
      newItem: e.target.value,
    });
  }

  onKeyDown(e) {
    if (e.keyCode != 13) return;
    const { addNewTodo } = this.props;
    addNewTodo(e.target.value);
  }

  render() {
    const { modal, toggleModal, todos, addNewTodo, toggleFinish } = this.props;
    return (
      <div className="todo-app">
        <h1 className="todo-header">DAILIST</h1>
        <div className={classNames("content", { "no-item": todos.length < 1 })}>
          {todos.length < 1 ? (
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p className="notifi">Hey guy, you haven't added data here</p>
              <img src={bg} alt="background" />
            </div>
          ) : (
            <div style={{ width: "100%", padding: "0 20px 20px 20px" }}>
              <div className="list-item">
                <div>UPCOMING</div>
                {[...todos]
                  .filter((i) => i.isDone == false)
                  .map((i, index) => (
                    <div
                      key={index}
                      onClick={toggleFinish(i)}
                      className="todo-item"
                    >
                      {i.id + ". " + i.content}
                    </div>
                  ))}
              </div>

              <div className="list-item">
                <div>Finish</div>
                {[...todos]
                  .filter((i) => i.isDone == true)
                  .map((i, index) => (
                    <div
                      key={index}
                      onClick={toggleFinish(i)}
                      className="todo-item item-done"
                    >
                      {i.id + ". " + i.content}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        <div className="add-button">
          <div onClick={toggleModal} className="add-content">
            <img src={iconAdd} alt="add" />
          </div>
        </div>
        {modal && (
          <div className="modal">
            <div className="modal-content">
              <span className="modal-close" onClick={toggleModal}>
                &times;
              </span>
              <div className="modal-form">
                <input
                  type="text"
                  onChange={this.updateNewItem}
                  onKeyDown={this.onKeyDown}
                  placeholder="Add new todo item"
                />
                <button
                  onClick={(e) => {
                    addNewTodo(this.state.newItem);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming
