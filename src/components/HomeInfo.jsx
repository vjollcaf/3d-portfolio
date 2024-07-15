import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../src/assets/icons/arrow.svg";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Vjollca {`:)`}</span>
      <br />A Software Developer from Kosovo
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Want to know more about me?"
      link="/about"
      btnText="Learn More"
    />
  ),
  4: (
    <InfoBox
      text="Want to see what projects i worked on? "
      link="/projects"
      btnText="Click to see more"
    />
  ),
};

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
