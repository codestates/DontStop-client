import React, { Component } from "react";
import "./Button.css";
import Modal from "../../pages/modal/modal";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <div className="modal__btn">
          <button onClick={this.openModal}>스터디 만들기</button>
          <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
        </div>
      </>
    );
  }
}

export default Button;
