import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Container>
        <Logo>
          <img src="img/FooterLogo.png" alt="" />
        </Logo>

        <User>
          <GitLogo>
            <img src="img/GitLogo.png" alt="" />
          </GitLogo>
          <span
            onClick={() =>
              (window.location.href = "https://github.com/wonbeenna")
            }
          >
            나원빈
          </span>
          <span
            onClick={() =>
              (window.location.href = "https://github.com/baymaxxxxx")
            }
          >
            김지은
          </span>
          <span
            onClick={() =>
              (window.location.href = "https://github.com/Lee-SangRyeol")
            }
          >
            이상렬
          </span>
          <span
            onClick={() =>
              (window.location.href = "https://github.com/yoolee741")
            }
          >
            이유림
          </span>
        </User>
      </Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 0 200px;
  z-index: 1;
  background-color: #a8a8a8;
  justify-content: space-between;
`;

const Logo = styled.div`
  align-items: center;

  img {
    height: 80px;
    flex-wrap: nowrap;
    margin: 30px 10px 20px 20px;
    padding-right: 40px;
    border-right: 1px solid gray;
  }
`;

const GitLogo = styled.div`
  img {
    height: 30px;
    padding-right: 20px;
    flex-wrap: nowrap;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 15px;

  span {
    border-left: 1px solid white;
    padding: 0 10px 0 10px;
  }
`;
