import React from "react";
import "./WhatWeDo.css";
import cards from "../content/cards";
const WhatWeDo = () => {
  return (
    <div className="first-container what-we-do" id="what-we-do">
      <div className="heading-tag">
        <div className="heading-tag-child"></div>
        <div className="what-we-do1">What we do</div>
      </div>
      <b className="we-offer-a">
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </b>

      <div className="section-container">
        {cards.map((card, index) => (
          <div className="section" key={index}>
            <img className="icon" alt="" src={card.iconSrc} />
            <b className="heading">{card.title}</b>
            <div className="text">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
