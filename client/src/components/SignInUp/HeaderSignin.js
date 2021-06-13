import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HeaderSignin() {
    return (
        <Container>
            <Logo>
                <Link to="/">
                    <img src="img/Logo.png" alt="" />
                </Link>
            </Logo>
        </Container>
    );
}

export default HeaderSignin;

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
