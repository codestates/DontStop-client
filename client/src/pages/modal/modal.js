import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import "./modal.css";
axios.defaults.withCredentials = true;
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
      count: 3,
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.insertHandler = this.insertHandler.bind(this);
  }

  inputHandler = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  insertHandler = async () => {
    const insertUlr = "http://localhost:4000/groups/search";
    await axios
      .post(
        insertUlr,
        {
          // 조건부 post 두값 모두 들어가야 요청
          ...(this.state.title ? { title: this.state.title } : {}),
          ...(this.state.contents ? { contents: this.state.contents } : {}),
          count: this.state.count,
        },
        {
          headers: {
            authorization: `Bearer ${this.props.token}`,
          },
        }
      )
      .then((res) => {
        this.closeModal();
        window.location.replace("/search");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  closeModal = () => {
    this.setState(this.props.close);
  };

  render() {
    const { isOpen, close } = this.props;
    return (
      <>
        {isOpen ? (
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
                  maxLength="15"
                  onChange={this.inputHandler("title")}
                />
                <textarea
                  className="modal__content"
                  name="contents"
                  type="contents"
                  maxLength="100"
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
