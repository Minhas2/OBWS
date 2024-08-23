import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import heading from "../assets/viral.png";
import scriptside from "../assets/thriving.png"
import arrow from "../assets/arrow.svg";
const Thriving = () => {
  return (
    <>
      <Container className="py-5 sidebysidebg">
        <Col xs={12} lg={11} className="mx-auto">
          <Row className="pb-lg-5">
            <Col xs={12} lg={5}>
              <div className="text-center scriptssideimage mt-2">
                <Image src={scriptside} width={"90%"} />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div className="scriptside pb-lg-5 pt-3">
              <h1 className="stylishfont mainheading text-black">The Official Black Wall Street  <span className="backgroundheaading">Membership</span></h1>
                <h2 className="py-3 headingfont">
                A Thriving Community Of Black Entrepreneurs
                </h2>
                <p className="Poppins">
                OBWS is more than just a platform; it's a movement, a vibrant ecosystem where Black entrepreneurs and conscious consumers converge to amplify Black- owned businesses and uplift communities. We're passionate about fostering connections that empower Black entrepreneurs to achieve their dreams and inspire consumers to make a positive impact through their purchasing power.
                </p>
              
                <div className="white-area px-3 py-1" style={{border:"1px solid pink"}}>
               <span className="paragraphfont">Join the movement and amplify </span><b>Black excellence</b>
              </div>
                <Button className="mt-3 mb-5">
              <span className="mx-3 text-white">
                Join <b className="mx-2">OBWS</b>
              </span>{" "}
              <img src={arrow} alt="" />
            </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    
    </>
  );
};

export default Thriving;
