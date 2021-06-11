import React from 'react'
import './Post.css'

function Post() {
    return (
            <div className='post__card'>
                <img src='img/Study.png' alt='' />
                <div className='post__info'>
                        <h2>스터디 그룹명</h2>
                        <h5>스터디 그룹 소개 내용 스터디 블라블라 내용 스터디 블라블라 내용 스터디 블라블라 내용 스터디 블라블라
                        스터디 그룹 소개 내용 스터디 블라블라 내용 스터디 블라블라 내용 스터디 블라블라 내용 스터디 </h5>
                        <button className='post__btn'>스터디 가입하기</button>
                </div>
            </div>
    )
}

export default Post