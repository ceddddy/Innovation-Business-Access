import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Convinient, High Quality, Proffessional Staff " />
      <h1 className="app__header-h1">We Move With Every Step</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        IBA GROUP has created the most effective manufacturing techniques to
        guarantee that orders are executed with the highest attention. While
        adhering to strict quality standards and all environmental regulations.
        Our organisation's primary goal is to provide our clients with effective
        and dependable solutions for all of their timber , security, solar and
        electrical engineering needs
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.solarfield} alt="header img" />
    </div>
  </div>
);

export default Header;
