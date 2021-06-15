import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  insertHandler = async () => { // 만들기 토큰 필요
    const insertUlr = "http://localhost:4000/groups/search";
    await axios
      .post(
        insertUlr,
        {
          title: this.state.title,
          contents: this.state.contents,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        this.closeModal();
      });
  };
  // 스터디 생성시 모달 지우기
  closeModal = () => {
    this.setState(this.props.close);
  };

  render() {
    const { isOpen, close } = this.props; //버튼 props
    return (
      <>
        {isOpen ? (
          // (isOpen === true)면 모달생성
          //<span className='modal__close' onClick={close}>x</span> x버튼 누르면 꺼짐
          <div className="modal">
            <div className="modal__studySearch">
              <span className="modal__close" onClick={close}>
                x
              </span>
              <div className="modal__Contents">
                <div className="modal__name">스터디 그룹 만들기</div>
                <input
                  className="modal__title"
                  name="title"
                  type="title"
                  placeholder="스터디 그룹명을 입력하세요."
                  onChange={this.inputHandler("title")}
                />
                <textarea
                  className="modal__content"
                  name="contents"
                  type="contents"
                  placeholder="스터디 그룹 소개글을 입력하세요."
                  onChange={this.inputHandler("contents")}
                />
                <div className="modal__emt"></div>
                <button
                  className="modal__insert"
                  type="submit"
                  onClick={this.insertHandler}
                >
                  스터디 생성하기
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(Modal);
