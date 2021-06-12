import React from "react";
import GroupPost from "../components/GroupPage/GroupPost";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
import "./Grouppage.css";

function Grouppage() {
    return (
        <>
            <Header style={{ backgroundColor: "#F8E7E7" }} />
            <div className="main">
                <GroupPost />
            </div>
            <Footer />
        </>
    );
}

export default Grouppage;
