import React from 'react'
import './Banner.css'

function Banner() {
    return (
            <div className='banner'>
                <div className='banner__center'>
                    <div className='banner__title'>
                        <h1>Don't Stop!</h1>
                        <div className='banner__content'>
                        <h5>To follow, without halt, one aim: 
                        <br/>There's the secret of success.</h5>
                        </div>
                    <div className='banner__Search'>
                        <button className='banner_SearchBtn'>스터디 찾기</button>
                    </div>
                    </div>
                    <div className='banner__imgs'>
                    <img
                        className='banner__img'
                        src='./img/AlienMain.png' 
                        alt=''
                    />
                    </div>
                </div>

                <div className='banner__ranking'>
                    <div className='banner__rankInfo'>
                        <h2>Ranking</h2>
                        <p>랭킹 달성에 도전해 보세요!</p>
                    </div>
                    <div className='banner__rank'>
                        {/* <img src='img/Num1.png' /> */}
                        <img className='banner__userImg' src="./img/gold.png" alt=""></img>
                        <div className='banner__userInfo'>나원빈</div>
                    </div>
                    <div className='banner__rank'>
                        {/* <img src='img/Num2.png' /> */}
                        <img className='banner__userImg' src="./img/silver.png" alt=""></img>
                        <div className='banner__userInfo'>나원빈</div>
                    </div>
                    <div className='banner__rank'>
                        {/* <img src='img/Num3.png' /> */}
                        <img className='banner__userImg' src="./img/bronze.png" alt=""></img>
                        <div className='banner__userInfo'>나원빈</div>
                    </div>
                </div>
                <div className='banner--fadeBottom' />
            </div>
    )
}

export default Banner