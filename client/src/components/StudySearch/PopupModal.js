import React from "react";
import "./PopupModal.css";

function PopupModal(props) {
  const { isOpen, close } = props;
  return (
    <>
      {isOpen ? (
        <div className="popup__modal">
          <div className="popup__main">
            <span className="popup__close" onClick={close}>
              X
            </span>
            <div className="popup__Contents">
              <div className="popup__name">그룹에 가입 되었습니다.</div>
              <button className="popup__insert" type="submit" onClick={close}>
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PopupModal;
