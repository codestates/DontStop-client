import React, { Component } from "react";
import "./PopupButton.css";
import PopupModal from "./PopupModal";

class PopupButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
    this.props.joinHandler();
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <div className="post__btn">
          <button className="post__btn" onClick={this.openModal}>
            스터디 가입하기
          </button>
          <PopupModal isOpen={this.state.isModalOpen} close={this.closeModal} />
        </div>
      </>
    );
  }
}

export default PopupButton;
