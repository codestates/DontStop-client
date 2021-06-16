import React from "react";
import "./Section3.css";
import Fade from "react-reveal/Fade";

function Section3() {
  return (
    <div className="section3">
      <div className="section__main3">
        <div className="section__img3">
          <img src="img/Alien1.png" alt="" />
        </div>
        <div className="section__title3">
          <div className="section__content3">
            <p>개인일지 기록 공유</p>
            <div className="section__info3">
              <p>오늘 하루 TIL을 기록하고 팀원들과 공유하세요.</p>
            </div>
            <Fade right>
              <video className="section__infoImg3" autoPlay loop muted>
                <source type="video/mp4" src="img/grouppage.mp4"></source>
              </video>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
