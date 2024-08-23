import React from "react";
import { Col, Container } from "react-bootstrap";
import explosion from "../assets/hundredheading.png";
import profile from "../assets/hundred.png";
const Hundred = () => {
  return (
    <>
      <div className="hundred py-lg-3 py-3">
        <Container>
          <Col xs={12} lg={8} className="mx-auto py-lg-5">
            <div>
              <div className="text-center py-4">
              <h1 className="stylishfont mainheading text-white">I sold over  <span className="backgroundheaadingorange">hundred of books</span></h1>
                <div
                  className="m-auto "
                  style={{ width: "100px", height: "100px" }}
                >
                  <img src={profile} className="pt-3" width={"100%"} alt="" />
                </div>

                <p className="my-3 pt-3 text-white headingfont">
                  "I had a great experience advertising with Official Black Wall
                  Street. I gained so much exposure and sold over hundreds of
                  books. I would highly recommend OBWS for any Black business
                  owner trying to gain sales and exposure.
                </p>
                <small className="text-white">
                  <b>- Latoya Nicole</b> <span className="paragraphfont">of Entrepreneurs Color Too</span>
                </small>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Hundred;
