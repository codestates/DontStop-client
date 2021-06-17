import React from "react";
import "./Section2.css";
import Fade from "react-reveal/Fade";

function Section2() {
  return (
    <div className="section2">
      <div className="section__main2">
        <div className="section__content2">
          <Fade left>
            <video className="section__infoImg" autoPlay loop muted>
              <source type="video/mp4" src="img/Timer.mp4"></source>
            </video>
          </Fade>
          <p>공부시간 체크</p>
          <div className="section__info2">
            <p>
              공부 시간을 체크하고, 이번주 누적 시간을 확인하고,
              <br />
              랭크 달성에 도전해 보세요!
            </p>
          </div>
        </div>
        <div className="section__title2">
          <div className="section__img2">
            <img src="img/Alien2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
//aaa
export default Section2;
