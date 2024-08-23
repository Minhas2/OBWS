import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import blur from "../assets/blurcombine.png";
const Featured = () => {
  return (
    <>
    <div className="sidebysidebg py-5">
      <Container>
        <div className="text-center featuredheading py-5 ">
          <h1 className="headingfont">Featured Industries</h1>
        </div>
        <Row>
          <Col xs={12} lg={6}>
           
          
                <Image src={blur} style={{borderRadius:"60px"}} width={"100%"} />
             
           
           
          </Col>
          <Col xs={12} lg={6} className="px-5 py-3">
            <div className="featured">
              <h1 className="headingfont">
                Our Platform Supports Several Indestries Including
              </h1>
              <Row className="pt-2">
                <Col xs={12} lg={6}>
                  <div className="pricing Poppins">
                    <ul>
                      <li className="py-2">Brick & Mortar</li>
                      <li className="py-2">Brick & Mortar</li>
                      <li className="py-2">Brick & Mortar</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className="pricing Poppins">
                    <ul>
                      <li className="py-2">Brick & Mortar</li>
                      <li className="py-2">Brick & Mortar</li>
                    </ul>
                  </div>
                </Col>
                <h1 className="stylishfont mainheading text-black" style={{fontSize:"40px"}}>There's Space For You Here</h1>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Featured;
