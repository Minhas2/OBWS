import React from "react";
import { Col } from "react-bootstrap";

const CardsHeading = ({ heading, subheading,orangeheading,orangeparagraph,aftersubheading,afterheading }) => {
  return (
    <Col xs={10} className="mx-auto">
      <div className="cardsheading text-center py-5">
        <h1 className="headingfont">
          {heading} <span>{orangeheading}</span>{afterheading}
        </h1>
        <p className="paragraphfont">
          {subheading}<span>{orangeparagraph}</span>{aftersubheading}
        </p>
      </div>
    </Col>
  );
};

export default CardsHeading;

