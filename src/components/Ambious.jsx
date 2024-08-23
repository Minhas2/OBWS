import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import heading from "../assets/ambiousheading.png";
import scriptside from "../assets/ambious.png";
import arrow from "../assets/arrow.svg";
const Ambious = () => {
  return (
    <>
      <Container className="py-5">
        <Col xs={12} lg={11} className="mx-auto">
          <Row className=" ">
            <Col xs={12} lg={5}>
              <div className="text-center scriptssideimage mt-2">
                <Image src={scriptside} width={"100%"} />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div className="scriptside pb-3 pt-3 px-lg-5">
              <h1 className="stylishfont mainheading text-black">Hey, Ambitious<br/>  <span className="backgroundheaading">Buisness Owner</span></h1>
                <h2 className="py-3 headingfont">
                  You Need To Be VISIBLE To Make An Impact
                </h2>
                <p className="Poppins">
                  Visibility is the key to unlocking your brand's true
                  potential. It's about attracting new customers, building a
                  loyal following, and achieving sustainable growth that'll
                  solidify your legacy long after you're gone.
                </p>
                <p className="Poppins">
                  With Official Black Wall Street, your business can shine
                  brighter than ever. Join our thriving platform, and let
                  yourself and your brand become a star in your community.
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

export default Ambious;
