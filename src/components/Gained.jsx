import React from "react";
import { Col, Container } from "react-bootstrap";
import profile from "../assets/profile.png";
const Gained = () => {
  return (
    <>
      <div className=" ">
        <Container className="gainedouter pt-5">
          <Col xs={12} lg={9} className="mx-auto pt-3 ">
            <Col xs={12} lg={8} className="mx-auto">
              <div className="text-center gained">
                <h1 className="headingfont">We've Gained Many Loyal Customer</h1>
              </div>
            </Col>
            <div>
              <div className="text-center py-lg-5 py-3 gainedinner">
                <div
                  className="m-auto "
                  style={{ width: "80px", height: "80px" }}
                >
                  <img src={profile} width={"100%"} alt="" />
                </div>

                <p className="my-3 Poppins">
                  "The Official Black Wall Street page gives us some of the best
                  results on social media. Ever since we started working with
                  OBWS for advertising, our results have been phenomenal. The
                  audience is engaging, supportive and we have gained many loyal
                  customers and social media followers from using their
                  platform."
                </p>
                <small>
                  <b style={{ fontSize: "20px" }}>
                    -PATRICK AND KRISTIN GLANVILLE,
                  </b>
                  <p className="Poppins">CEOS OF 3 SOME CHOCOLATES</p>
                </small>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Gained;
