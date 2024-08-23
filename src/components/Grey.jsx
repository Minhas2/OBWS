import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import arrow from "../assets/arrow.svg";
const Grey = () => {
  return (
    <>
      <div className="greysection py-5">
        <Container>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="capital text-center text-white">
              <h1 className="headingfont">Get Capital To Grow Your Buisness</h1>
              <p className="Poppins">
              <b>Picture this -</b> your business is thriving and you have more customers than ever before. You have access to the funding you need to invest in your
business, whether you use it to
              </p>
            </div>
            <Col xs={12} lg={10} className="mx-auto bg-black">
              <div className="pricing px-5 py-4">
                <ul className="text-white paragraphfont">
                  <li>Expand Your Product Line</li>
                  <li>Hire More Talent , or even</li>
                  <li>Open the New Location you are being dreaming About</li>
                </ul>
              </div>
            </Col>

            <div className="text-center text-white pt-3">
              <p className="Poppins">
              That's the power of having access to dozens of grants and funding
resources. We want to help you get those funds! $$$
              </p>
              <Button className="mt-3 mb-5 greybtn">
              <span className="mx-3">
                Join <b className="mx-2">OBWS</b>
              </span>{" "}
              <img src={arrow} alt="" />
            </Button>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Grey;
