import React from "react";
import { Card, Col, Container, Image } from "react-bootstrap";
import image from "../assets/introducing.png";
import introduction from "../assets/inntroductionheading.png"
const Introducing = () => {
  return (
    <>
      <Container>
        <Col xs={12} lg={10} className="mx-auto ">
          <Card className="introducing">
        
            <div className="cardsheading text-center py-lg-5 py-3">
            <Col xs={12} lg={5} className="mx-auto">
              <div className="text-center my-2">
              <h1 className="stylishfont mainheading text-black"><span className="backgroundheaading text-black">Introducing</span></h1>
              </div>
            </Col>
              <h1 className="headingfont px-5 pb-lg-3">
                <span>The Official Black Wall Street</span> Membership
              </h1>
              <Image src={image} width={"100%"} />
              <p className="Poppins p-lg-5 p-3">
                The community where ambitious Black entrepreneurs come to access
                the necessary tools, resources, and connections they need to
                amplify their brand, expand their reach, and leave a lasting
                legacy.
              </p>
            </div>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Introducing;
