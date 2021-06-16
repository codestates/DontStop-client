import React, { useState, useEffect } from "react";
import "./Banner.css";
import { useHistory } from "react-router";
import axios from "axios";

function Banner() {
  const history = useHistory();

  const imgs = ["./img/gold.png", "./img/silver.png", "./img/bronze.png"];

  // 응답 메세지 출력은 됐는데 3개 받아온건 어케뿌리지? 훅은 어려워
  const [ranks, setRanks] = useState([]);
  const apiUrl = "http://localhost:4000/users/rank";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });
      //setRanks(여기서 다시받아야되나?)
      setRanks(response.data);
      console.log(response.data);
    }
    fetchData();
  }, [apiUrl]);
  console.log(ranks);

  return (
    <div className="banner">
      <div className="banner__center">
        <div className="banner__title">
          <h1>Don't Stop!</h1>
          <div className="banner__content">
            <h5>
              To follow, without halt, one aim: There's the secret of success.
            </h5>
          </div>
          <div className="banner__Search">
            <button
              className="banner_SearchBtn"
              onClick={() => history.push("/search")}
            >
              스터디 찾기
            </button>
          </div>
        </div>
        <div className="banner__imgs">
          <img className="banner__img" src="./img/AlienMain.png" alt="" />
        </div>
      </div>

      <div className="banner__ranking">
        <div className="banner__rankInfo">
          <h2>Ranking</h2>
          <p>랭킹 달성에 도전해 보세요!</p>
        </div>
        <div className="banner__rank">
          <div className="banner__userImgs">
            {imgs.map((img, idx) => (
              <img
                className="banner__userImg"
                key={idx}
                src={`${img}`}
                alt=""
              />
            ))}
          </div>
          <div className="banner__userInfos">
            {/* <div className="banner__userInfo">{Object.values(ranks)}</div> */}
            {Object.values(ranks).map((rank, idx) => {
              return (
                //리턴해야됨,,,
                <div className="banner__userInfo" rank={rank} key={idx}>
                  {rank}
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="banner__rank"> */}
        {/* <img className="banner__userImg" src="./img/silver.png" alt=""></img>
          <div className="banner__userInfo">나원빈</div>
        </div>
        <div className="banner__rank"> */}
        {/* <img className="banner__userImg" src="./img/bronze.png" alt=""></img>
          <div className="banner__userInfo">나원빈</div>
        </div> */}
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
}

export default Banner;
