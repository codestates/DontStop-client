import React from "react";
import Banner from "../components/Main/Banner";
import Section from "../components/Main/Section";
import Section2 from "../components/Main/Section2";
import Section3 from "../components/Main/Section3";
import Footer from "../components/Main/Footer";

import "./Main.css";

function Main() {
    return (
        <div className="main">
            <Banner />
            <Section />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    );
}

export default Main;
