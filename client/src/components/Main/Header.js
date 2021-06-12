import React from "react";
import styled from "styled-components";

function Header() {
 
  return (
    <Container>
      <Logo>
        <img src="img/Logo.png" alt="" />
      </Logo>
      <RightMenu>
        <p>로그인</p>
        <p>회원가입</p>
      </RightMenu>
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
    }`

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
