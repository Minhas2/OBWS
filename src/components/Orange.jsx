import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import arrow from "../assets/arrow.svg";
import get from "../assets/get.png";
import man from "../assets/orange.png";
const Orange = () => {
  return (
    <>
      <div style={{ background: "#EF6C38" }}>
        <Container>
          <div className="orangepicture">
            <Image src={man} width={"100%"} />
          </div>
          <div>
            <Row className="orangetext py-lg-5 py-4">
              <Col xs={12} lg={6}>
                <div className=" text-center ">
                  <h1 className="headingfont px-lg-5">
                    You're Ready To Break Through To Your Next Level As CEO...
                  </h1>
                  <Image src={get} width={"40%"} />
                </div>
              </Col>
              <Col xs={12} lg={6} className="my-auto">
                <div className="text-white Poppins">
                  <p>
                    Seeing the challenges Black-owned businesses face in her
                    native hometown, Brooklyn, our founder Mandy Bowman created
                    OBWS as a platform to support their success and growth.
                  </p>
                  <p>
                    She wanted to see these small businesses get the tools and
                    resources they needed to not only survive but THRIVE.
                  </p>
                  <p>
                    Getting your company in front of interested consumers
                    doesn't have to be complicated. You just need a platform
                    that amplifies Black businesses and voices, so you can spend
                    more time doing what you love and
                  </p>
                </div>
                {/* <div
                  className="bg-white border-1"
                  style={{ borderRadius: "30px", border:"1px solid black" }}
                >
                  <p className="px-3 py-2 paragraphfont m-0">
                    Less time worrying about where your next customer or client
                    is coming from.
                  </p>
                </div> */}
              </Col>

              <div className="container">
                <div className="d-flex justify-content-center ">
                  <div
                    className="bg-white border-1"
                    style={{ borderRadius: "30px", border: "1px solid black" }}
                  >
                    {" "}
                    <p className="px-3 py-2 paragraphfont m-0">
                      Less time worrying about where your next customer or
                      client is coming from.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="my-5">
                  Join <b>OBWS</b> <img src={arrow} alt="" />
                </Button>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Orange;
