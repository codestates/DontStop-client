import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header({ isLogin }) {
    const userInfo = useSelector((state) => state.userInfoReducer);
    const { accessToken } = userInfo;
    console.log("userInfo", userInfo);

    return (
        <Container>
            <Logo>
                <Link to="/">
                    <img src="img/Logo.png" alt="" />
                </Link>
            </Logo>
            {isLogin ? (
                <RightMenu>
                    <Link
                        to="./mypage"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <p>마이페이지</p>
                    </Link>

                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <p>로그아웃</p>
                    </Link>
                </RightMenu>
            ) : (
                <RightMenu>
                    <Link
                        to="./login"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <p>로그인</p>
                    </Link>

                    <Link
                        to="./signup"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <p>회원가입</p>
                    </Link>
                </RightMenu>
            )}

            {/* <RightMenu>
                <Link
                    to="./login"
                    style={{
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    <p>로그인</p>
                </Link>
                
                <Link
                    to="./signup"
                    style={{
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    <p>회원가입</p>
                </Link>
            </RightMenu> */}
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-top: 30px;
        height: 100px;
        width: 100px;
        flex-wrap: nowrap;
        cursor: pointer;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-right: 10px;
        font-weight: 600;
        flex-wrap: nowrap;
        color: white;
        cursor: pointer;
    }
`;
