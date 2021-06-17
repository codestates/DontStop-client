import React from "react";
import "./Section.css";
import Zoom from "react-reveal/Zoom";

function Section() {
  return (
    <div className="section">
      <div className="section__main">
        <div className="section__img">
          <img src="img/Alien3.png" alt="" />
        </div>
        <div className="section__title">
          <div className="section__content">
            <p>스터디 그룹 가입</p>
            <div className="section__info">
              <p>
                스터디 리더가 되고싶으신가요? 교류를 시작해 보세요. <br />
                장소, 시간에 제약받지 않고 교류를 시작해 보세요.
              </p>
            </div>
            <Zoom>
              <video className="section__infoImg" autoPlay loop muted>
                <source type="video/mp4" src="img/StudySearch.mp4"></source>
              </video>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
//ddd
export default Section;
