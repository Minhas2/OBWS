import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import connection from "../assets/orangebig.png";
import tick from "../assets/Tick.png";
import cross from "../assets/Cross.png";
import arrow from "../assets/arrow.svg";
const Connection = () => {
  const membershipFeatures = [
    { description: "Access to a digital platform connecting quality Black-owned Products and Services to the consumers", obws: true, otherPlatforms: false },
    { description: "Consistent features on social media platforms and a newsletter garnering over 1.4 Million active followers and subscribers.", obws: true, otherPlatforms: false },
    { description: "Access to live business coaching and masterclasses", obws: true, otherPlatforms: false },
    { description: "First dibs on our live in-person events and conferences", obws: true, otherPlatforms: false },
    { description: "Access to over $500,000 in funding opportunities", obws: true, otherPlatforms: false },
    { description: "No questions asked, cancel anytime policy.", obws: true, otherPlatforms: false },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#EF6C38" }}>
        <Container>
          <Col xs={12} lg={10} className="mx-auto py-5">
            <div className="text-center text-white connection">
              <p className="paragraphfont m-0">
                JOIN THE GO-TO ONLINE PLATFORM
              </p>
              <p className="paragraphfont m-0">
                FOR UNPARALLELED EXPOSURE AND ENGAGEMENT
              </p>
              <h2
                className="headingfont clas
            py-3"
              >
                Get Connected With Hundreds Of Thousands Of Consumers Who Are
                Looking To Shop Black-Owned Businesses.
              </h2>
              <h1 className="headingfont">
                20+ INDUSTRIES SERVED | X MEMBERS | X FOLLOWERS
              </h1>
              <div className="orangebig">
                <Image src={connection} width="100%" />

                <Col xs={12} lg={8} className="mx-auto pt-4">
                  <h2 className="headingfont clas py-3">
                    This Membership Was Created Specifically For YOU
                  </h2>
                  <p className="Poppins">
                    If you've been hustling hard, pouring time, energy, and cash
                    into ads, job boards, and marketing plays without seeing
                    those real results, it's time to join the <b>OBWS Membership.</b>
                  </p>
                </Col>
              </div>
            </div>

            <div className="oragetable-outer">
              <Card className="px-5 orangetable border-white rounded-5 relative">
                <div className="orangeline"></div>
                <div className="otherorangeline"></div>

                <div>
                  <Row className="p-3 ">
                    <Col xs={8}></Col>
                    <Col xs={2}>
                      <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                        <h2 className="text-white headingfont">OBWS</h2>
                      </div>
                    </Col>
                    <Col xs={2}>
                      <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                        <h2 className="text-black headingfont">Other Digital Platforms</h2>
                      </div>
                    </Col>
                  </Row>
                </div>



                {membershipFeatures.map((feature, index) => (
                  <div key={index} className="my-2">
                    <Row className="p-3 bg-white Poppins">
                      <Col xs={8}>
                        <p className="m-0 tabletext">{feature.description}</p>
                      </Col>
                      <Col xs={2}>
                        <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                          {feature.obws && <Image src={tick} width={"30%"} style={{ zIndex: "2" }} />}
                          {!feature.obws && <Image src={cross} width={"30%"} style={{ zIndex: "2" }} />}
                        </div>
                      </Col>
                      <Col xs={2}>
                        <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                          {feature.otherPlatforms && <Image src={tick} width={"30%"} style={{ zIndex: "2" }} />}
                          {!feature.otherPlatforms && <Image src={cross} width={"30%"} style={{ zIndex: "2" }} />}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}



              </Card>

            
            </div>
            <div className="text-center orangetext">
                <Button className="my-5">
                  Join <b>OBWS</b> <img src={arrow} alt="" />
                </Button>
              </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Connection;
