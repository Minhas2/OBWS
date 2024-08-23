import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/side.png";
import arrow from "../assets/arrow.svg";
import shop from "../assets/Shop.png"
import spotlight from "../assets/Spotlight.png"
import funding from "../assets/Funding.png"
import comunity from "../assets/Community.png"
const Recap = () => {
  return (
    <>
      <div className="gainedouter py-5">
        <Col xs={12} lg={8} className="mx-auto pt-3 ">
          <Col xs={12} lg={7} className="mx-auto">
            <div className="text-center gained">
              <h1 className="headingfont">
                We've Seen A Big Increase In Sales
              </h1>
            </div>
          </Col>
          <div>
            <div className="text-center  py-3 gainedinner">
              <p className="my-3 paragraphfont">
                "I can't thank you enough because since your post we've seen a
                big increase in sales, following and brand engagement. I love
                the movement."
              </p>
              <small>
                <b style={{ fontSize: "20px" }}>-JOHNY DELVAR,</b>
                <p className="paragraphfont">CEOS OF LOCK IT PLATES</p>
              </small>
            </div>
          </div>
        </Col>

        <Container>
          <Col
            xs={12}
            lg={10}
            className="mx-auto card p-4 my-5"
            style={{ borderRadius: "60px" }}
          >
            <Col xs={12} lg={9} className="mx-auto">
              <div className="text-center  m-auto recapheading">
                <h1 className="headingfont py-5">
                  Here's is your recap of What You Get When You Join OBWS
                </h1>
              </div>
            </Col>

            <Row className="">
              <Col xs={2} lg={1} className="icon-right">
                <div className="text-center ">
                  <Image className="mt-4" src={shop} width={"100%"} />
                </div>
              </Col>
              <Col xs={10} lg={11}>
                <div className="recaptext">
                  <p className="paragraphfont">
                    <b>Your own storefont: </b>Create a stunning landing page where visitors can shop directly from the OBWS site, making it easier than ever for them to discover and love your products.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="border-topbottom">
              <Col xs={10} lg={11}>
                <div className="recaptext">
                  <p className="paragraphfont">
                    <b>A spotlight on your business: </b>Jumpstart your media exposure and marketing efforts with instant access to our growing community of over 1.4 million active shoppers.
                  </p>
                </div>
              </Col>
              <Col xs={2} lg={1} className="icon-left">
                <div className="text-center ">
                  <Image className="mt-4" src={spotlight} width={"100%"} />
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col xs={2} lg={1} className="icon-right">
                <div className="text-center ">
                  <Image className="mt-4" src={comunity} width={"100%"} />
                </div>
              </Col>
              <Col xs={10} lg={11}>
                <div className="recaptext">
                  <p className="paragraphfont">
                    <b>A community of like-minded entrepreneurs: </b>onnect with fellow Black business owners, share experiences, and tap into a wealth of knowledge and support. 
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="border-topbottom border-bottom-0">
              <Col xs={10} lg={11}>
                <div className="recaptext">
                  <p className="paragraphfont">
                    <b>Access to funding and resources:</b>Gain access to a curated list of grants, legal resources, business training, and more, empowering you to take your business to the next level.
                  </p>
                </div>
              </Col>
              <Col xs={2} lg={1} className="icon-left">
                <div className="text-center ">
                  <Image className="mt-4" src={funding} width={"100%"} />
                </div>
              </Col>
            </Row>

            <div className="py-lg-5 text-center">
              <div className="recaplower">
                <h1
                  className="stylishfont mainheading "
                  style={{ color: "#EF6C38", fontSize: "40px" }}
                >
                  Don't Let Your Brand's
                </h1>
                <h1 className="headingfont">Brilliance Remain Hidden</h1>
                <p className="">
                  <b>Join OBWS today</b> and let your business shine a beacon of
                  Black excellence
                </p>
                
                <div className="scriptside">
                <Button className="my-3 ">
                  <span className="mx-3 text-white">
                    Join <b className="mx-2">OBWS</b>
                  </span>{" "}
                  <img src={arrow} alt="" />
                </Button>
                </div>
                
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Recap;
