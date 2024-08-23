import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import scriptside from "../assets/man.png";
import arrow from "../assets/arrow.svg";
const LastSide = () => {
  return (
    <>
      <Container className="py-5 ">
        <Col xs={10} lg={8} className="mx-auto">
          <div className="text-center quote headingfont py-lg-5 py-3">
            <h1 >
              "Belief In Oneself And Knowing Who You Are, I Mean, That's The
              Foundation For Everything Great." 
            </h1>
            <p style={{fontWeight:"800"}}>- JAY Z.</p>
          </div>
        </Col>
        <Col xs={12} lg={11} className="mx-auto">
          <Row className="pb-lg-5">
            <Col xs={12} lg={5}>
              <div className="text-center scriptssideimage mt-2">
                <Image src={scriptside} width={"90%"} />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div className="scriptside pb-lg-5 pt-3">
                <h2 className="py-3 headingfont">
                  We Know That Being A Business Owner Isn't Always As Flashy As
                  It Looks On Social Media - But It's Time For You To Get
                  Serious About Getting Eyes On Your Business.
                </h2>
                <p className="paragraphfont">
                  High-quality traffic is the lifeblood of every business, and
                  while there are dozens of marketing options available for you
                  to try out, maximizing your ROI and finding success with them
                  comes with trial (time) and error (funds spent).
                </p>
                <p className="paragraphfont">
                  Being a member of Official Black Wall Street is a one stop
                  shop for Black business visibility, community, and
                  representation.
                </p>

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

export default LastSide;
